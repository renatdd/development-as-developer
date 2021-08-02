const millisecondsInAnMinute = 60 * 1000;

db.trips.aggregate([
  {
    $group: {
      _id: "$bikeid",
      tripDurationAvg: {
        $avg: {
          $divide: [
            { $subtract: ["$stopTime", "$startTime"] },
            millisecondsInAnMinute,
          ],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      bikeId: "$_id",
      duracaoMedia: { $ceil: "$tripDurationAvg" },
    },
  },
  { $sort: { duracaoMedia: -1 } },
  { $limit: 5 },
]);
