const millisecondsInAnMinute = 60 * 1000;

db.trips.aggregate([
  {
    $match: {
      $expr: {
        $eq: [
          {
            $dateToString: {
              date: "$startTime",
              format: "%Y-%m-%d",
            },
          },
          "2016-03-10",
        ],
      },
    },
  },
  {
    $group: {
      _id: null,
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
      duracaoMediaEmMinutos: { $round: "$tripDurationAvg" },
    },
  },
]);
