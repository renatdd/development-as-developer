db.air_routes.aggregate([
  {
    $match: {
      airplane: {
        $in: ["747", "380"],
      },
    },
  },
  {
    $group: {
      _id: "$airline.name",
      routes_count: { $sum: 1 },
    },
  },
  {
    $lookup: {
      from: "air_alliances",
      as: "alliance",
      let: {
        airline: "$_id",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $in: ["$$airline", "$airlines"],
            },
          },
        },
      ],
    },
  },
  {
    $unwind: "$alliance",
  },
  {
    $group: {
      _id: "$alliance.name",
      totalRotas: { $sum: "$routes_count" },
    },
  },
  {
    $sort: {
      totalRotas: -1,
    },
  },
  {
    $limit: 1,
  },
]);
