const companyName = "LATAM AIRLINES BRASIL";
const totalVoosDomesticos = db.voos.count({
  "empresa.nome": companyName,
  natureza: "Doméstica",
});
db.resumoVoos.insertOne({ empresa: companyName, totalVoosDomesticos });
db.resumoVoos.findOne({ empresa: companyName }, { _id: 0 });
