db.voos.findOne({
  $and: [
    {
      $nor: [
        { litrosCombustivel: { $gt: 600 } },
        { "empresa.nome": { $in: ["GOL", "AZUL"] } },
      ],
    },
    { litrosCombustivel: { $exists: true } },
  ],
},
{ _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 });
