<template>
  <div class="movie-cart">
    <div>
      <header class="movie-my-cart">
        <h2>Meu Carrinho</h2>
        <button @click="esvaziarCarrinho()">Esvaziar</button>
      </header>
      <div>
        <movie-item
          v-for="(item, index) in carrinho"
          :key="index"
          :data="item"
          @delItem="deletarItem(item)"
        ></movie-item>
      </div>
    </div>
    <div>
      <div class="movie-cart-total">
        <p>Total:</p>
        <p class="movie-cart-preco">R$ 19,90</p>
      </div>
      <div class="movie-cart-finalizar">
        <button
          class="movie-cart-finalizar-btn"
          @click="$emit('finalizarCompra')"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MovieItem from "./MovieItem.vue";
export default {
  components: { MovieItem },
  computed: {
    ...mapState(["carrinho"]),
  },
  methods: {
    ...mapActions(["deletarItem", "esvaziarCarrinho"]),
  },
};
</script>

<style>
.movie-cart {
  border: 2px solid #c3cfd9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie-my-cart {
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
}

.movie-my-cart h2 {
  font-size: 2rem;
  color: #293844;
}

.movie-my-cart button {
  border: none;
  background: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: underline;
  color: #6558f5;
}

.movie-cart-total {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.movie-cart-finalizar {
  display: flex;
  justify-content: center;
}

.movie-cart-finalizar-btn {
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
