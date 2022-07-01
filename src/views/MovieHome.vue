<template>
  <div>
    <movie-menu
      :favCount="favoritos.length"
      @favoritos="openOrCloseFav()"
      :cartCount="carrinho.length"
      @carrinho="openOrCloseCart()"
    ></movie-menu>
    <router-view />
  </div>
</template>

<script>
import MovieMenu from "@/components/MovieMenu.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    MovieMenu,
  },
  methods: {
    ...mapMutations(["openOrCloseCart", "openOrCloseFav"]),
  },
  computed: {
    ...mapState(["carrinho", "favoritos"]),
  },
};
</script>

<style scoped></style>
