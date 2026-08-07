const fs = require("fs");

const relatorio = {
  paginas: 3,

  css: 2,

  javascript: 2,
};

fs.writeFileSync(
  "reports/estatisticas.json",

  JSON.stringify(relatorio, null, 4),
);

console.log("Estatísticas geradas.");
