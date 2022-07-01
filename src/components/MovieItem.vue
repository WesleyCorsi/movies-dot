<template>
  <div class="item">
    <img :src="prefix + data.poster_path" alt="item-img" />
    <p class="title">{{ data.title }}</p>
    <p>{{ data.qt }}</p>
    <p>R$19,00</p>
    <button>
      <span v-if="isFav" class="material-icons md-24">add_shopping_cart</span>
    </button>
    <button><span class="material-icons md-24" @click="$emit('delItem')">delete</span></button>
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
    isFav: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
.item {
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
}

.item img {
  object-fit: cover;
  width: 75px;
  height: 100%;
  padding: 10px;
}

.item p {
  margin: 5px;
  color: #293844;
}

.title {
  min-width: 80px;
}

.item button {
  border: none;
  background: none;
  margin-right: 10px;
  cursor: pointer;
  color: #293844;
}
</style>
