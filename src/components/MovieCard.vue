<template>
  <div class="card">
    <div class="card-fav">
      <span
        class="material-icons md-24 btn-fav"
        @click="$emit('favoritarFilme')"
      >
        favorite
      </span>
    </div>
    <img :src="prefix + data.poster_path" alt="card-img" />
    <p class="card-date">{{ convertReleaseDate(data.release_date) }}</p>
    <h2 class="card-title">{{ data.title }}</h2>
    <p class="card-conteudo">
      <span class="card-avaliacao">
        <span class="material-icons md-24">star</span>
        {{ data.vote_average }}
      </span>
      <span>
        {{ data.genre }}
      </span>
    </p>
    <p class="card-preco">{{ data.preco }}</p>
    <button class="card-btn" @click="$emit('adicionarFilme')">Adicionar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prefix: "https://image.tmdb.org/t/p/w500/",
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertReleaseDate(releaseDate) {
      let date = new Date(releaseDate);
      date = date.toLocaleDateString("pt-BR");
      return date;
    },
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-top: 50px;
  width: 100%;
  border: 2px solid #c3cfd9;
  height: fit-content;
  position: relative;
}

.card-fav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.btn-fav {
  position: absolute;
  background: none;
  top: 0px;
  padding: 10px;
  color: red;
  align-items: center;
  cursor: pointer;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 350px;
}

p {
  font-size: 1.5rem;
}

.card-date {
  margin-top: 5px;
}

.card-title {
  font-size: 2rem;
  margin-top: 5px;
}

.card-conteudo {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.card-avaliacao {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 10px;
}

.card-avaliacao span {
  margin-right: 5px;
  color: #fbbc03;
}

.card-preco {
  padding: 10px;
}

.card-btn {
  border: none;
  border-radius: 3px;
  padding: 10px 25px;
  width: 100%;
  background: #6558f5;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
