db.trips.aggregate([
  {
    $match: {
      $and: [
        { birthYear: { $exists: true } },
        { birthYear: { $not: { $eq: "" } } },
      ],
    },
  },
  {
    $addFields: {
      anoNascimento: { $toInt: "$birthYear" },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: "$anoNascimento" },
      menorAnoNascimento: { $min: "$anoNascimento" },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);
