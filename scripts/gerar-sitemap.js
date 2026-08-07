const fs = require("fs");

const paginas = ["/", "/cursos.html", "/contato.html"];

let xml = "<urlset>\n";

paginas.forEach((p) => {
  xml += `<url><loc>${p}</loc></url>\n`;
});

xml += "</urlset>";

fs.writeFileSync("sitemap.xml", xml);

console.log("Sitemap atualizado.");
