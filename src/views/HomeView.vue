<template>
  <div>
    <ul v-if="pokemon">
      <li v-for="item in pokemon" :key="item.name">
        <img :src="item.sprites.front_default" alt="Pokemon Image">
      </li>
    </ul>
  </div>
</template>



<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const pokemon = ref(null);
    
    const numberOfPOoke = 16;
    
        onMounted(async () => {
      try {

        const pokemonArray = [];

        for (let i = 1;i<=numberOfPOoke;i++){
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
          pokemonArray.push(response.data);
        }
        pokemon.value = pokemonArray;
        console.log(pokemon.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return {
      pokemon
    };
  },
};
</script>
