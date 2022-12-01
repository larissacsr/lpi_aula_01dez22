var perfumes = [
	{
		nome: "Malbec",
		fabricante: "Boticário",
		tipo: "Amadeirado"
	},
	{
		nome: "L'elixir",
		fabricante: "Nina Ricci",
		tipo: "Floral frutado"		
	},
	{
		nome: "Animale for Men",
		fabricante: "Animale",
		tipo: "Âmbar Especiado"
	},
	{
		nome: "Poeme",
		fabricante: "Lancôme",
		tipo: "Floral"
	},
	{
		nome: "L'Air du temps",
		fabricante: "Nina Ricci",
		tipo: "Floral apimentado"
	}
];

function escrever_no_html() {
	let div_perfumes = document.querySelector("#div_perfumes");
	let lista_perfumes = document.querySelector("#lista_perfumes");
	for (var i = 0 ; i < perfumes.length ; i++){
		const item = document.createElement("li");
		const texto = document.createTextNode(perfumes[i].nome)
		item.appendChild(texto)
		lista_perfumes.appendChild(item)
		
	}

}
