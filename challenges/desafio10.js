const millisecondsInAnHour = 60 * 60 * 1000;

db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      tripDurationAvg: {
        $avg: {
          $divide: [
            { $subtract: ["$stopTime", "$startTime"] },
            millisecondsInAnHour,
          ],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: {
        $round: ["$tripDurationAvg", 2],
      },
    },
  },
  {
    $sort: {
      duracaoMedia: 1,
    },
  },
]);
