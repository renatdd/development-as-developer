db.trips.aggregate([
  {
    $group: {
      _id: {
        stationName: "$startStationName",
        dayOfWeekStart: { $dayOfWeek: "$startTime" },
      },
      tripCount: { $sum: 1 },
    },
  },
  { $sort: { tripCount: -1 } },
  { $limit: 1 },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id.stationName",
      total: "$tripCount",
    },
  },
]);
