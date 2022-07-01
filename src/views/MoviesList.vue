<template>
  <div class="content">
    <div class="movies">
      <movie-card
        v-for="(card, index) in cards"
        :key="index"
        :data="card"
        @adicionarFilme="listCarrinho(card)"
        @favoritarFilme="listFavoritos(card)"
      ></movie-card>
    </div>
    <movie-cart
      v-if="carrinhoTab"
      @finalizarCompra="goToCheckout()"
    ></movie-cart>
    <movie-fav v-if="favoritosTab"></movie-fav>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import axios from "axios";
import MovieCart from "@/components/MovieCart.vue";
import MovieFav from "@/components/MovieFav.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    MovieCard,
    MovieCart,
    MovieFav,
  },
  data() {
    return {
      cards: [],
    };
  },
  async created() {
    let resposta = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=77fea4e99e4c5232c33137a01364ae38&language=pt-BR&page=1"
    );
    this.cards = resposta.data.results;

    let generos = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=77fea4e99e4c5232c33137a01364ae38&language=pt-BR"
    );
    generos = generos.data.genres;
    console.log(generos);
    this.cards = this.cards.map((card) => {
      card.genre = generos.find(
        (genero) => genero.id === card.genre_ids[0]
      ).name;
      card.qt = 1;
      return card;
    });
    console.log(this.cards);
  },
  methods: {
    goToCheckout() {
      this.$router.push({ name: "moviecheckout" });
    },
    ...mapActions(["listCarrinho", "listFavoritos"]),
  },
  computed: {
    ...mapState(["carrinhoTab", "favoritosTab"]),
  },
};
</script>

<style scoped>
.content {
  display: flex;
  height: calc(100vh - 70px);
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  overflow: scroll;
}

.movies::-webkit-scrollbar {
  display: none;
}
</style>
