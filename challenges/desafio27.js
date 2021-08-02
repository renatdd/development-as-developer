const passaredoCounts = db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: passaredoCounts });
db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });
