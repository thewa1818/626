const pokemonNum = 10;

// 関数=魔法（おまじない）　自分で作るver

// 繰り返し処理の魔法
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNum; i++) {
    //1 ~ 10
    await getPokemon(i);
  }
};

// データを取得する魔法
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  createPokemon(pokemon); //データ塊を渡している
};

//htmlを準備して画面に表示する魔法

function createPokemon(pokemon) {
  const poke = `
  <div class="pokemon">
    <p class="id">No.${pokemon.id}</p>
    <p class="name">${pokemon.name}</p>
    <p class="height">${pokemon.height}</p>
    <div class="ball">
      <img src="${pokemon.sprites.front_default}" />
    </div>
    <div class="ball">
      <img src="${pokemon.sprites.back_default}" />
    </div>
    <div class="ball">
      <img src="${pokemon.sprites.front_shiny}" />
    </div>
    <p class="weight">${pokemon.weight}kg</p>
    <p class="weight">${pokemon.height}cm</p>
    <img src="${pokemon.sprites.back_shiny}" />

     ${pokemon.base_experience}

    
  
    
  </div>
  `;
  $(".list").append(poke);
}

fetchPokemons();