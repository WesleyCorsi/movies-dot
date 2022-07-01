<template>
  <div class="movie-fav">
    <div>
      <header class="movie-my-fav">
        <h2>Meus Favoritos</h2>
        <button>Esvaziar</button>
      </header>
      <div>
        <movie-item
          v-for="(item, index) in favoritos"
          :key="index"
          :data="item"
        ></movie-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MovieItem from "./MovieItem.vue";
export default {
  components: { MovieItem },
  computed: {
    ...mapState(["favoritos"]),
  },
};
</script>

<style>
.movie-fav {
  border: 2px solid #c3cfd9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie-my-fav {
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
}

.movie-my-fav h2 {
  font-size: 2rem;
  color: #293844;
}

.movie-my-fav button {
  border: none;
  background: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: underline;
  color: #6558f5;
}

.movie-fav-total {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.movie-fav-finalizar {
  display: flex;
  justify-content: center;
}

.movie-fav-finalizar-btn {
  border: none;
  width: 90%;
  padding: 10px 25px;
  color: #fff;
  background: #6558f5;
  border-radius: 3px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
