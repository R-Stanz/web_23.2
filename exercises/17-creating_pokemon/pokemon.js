function createPokemon(name, type, lvl, hp) {
	const pokemon = {
		name: name,
		type: type,
		lvl: lvl,
		hp: hp
	}
	return pokemon
}

const pokemon = createPokemon("Pikachu", "Eletric", 25, 80)
console.log(pokemon)
