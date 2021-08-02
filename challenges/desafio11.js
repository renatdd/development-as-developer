db.trips.aggregate([
  {
    $project: {
      dayOfWeekStart: { $dayOfWeek: "$startTime" },
    },
  },
  {
    $group: {
      _id: "$dayOfWeekStart",
      tripCount: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      diaDaSemana: "$_id",
      total: "$tripCount",
    },
  },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
