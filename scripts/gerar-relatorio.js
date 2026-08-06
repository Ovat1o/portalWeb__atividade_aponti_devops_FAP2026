const fs = require("fs");

fs.writeFileSync(

"reports/relatorio.html",

`
<h1>Portal Web</h1>

<p>Relatório gerado automaticamente.</p>
`

);

console.log("Relatório criado.");