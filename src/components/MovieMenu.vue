<template>
  <header class="header-menu">
    <!--     <img
      src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
    /> -->
    <div class="header-logo">Logo!</div>
    <form action="" class="header-search">
      <input type="" placeholder="Pesquisa" />
      <span class="material-icons md-24">search</span>
    </form>
    <div class="header-btn">
      <button class="header-icons" @click="$emit('favoritos')">
        <span class="material-icons md-24">
          <div class="fav-count">{{ favCount }}</div>
          favorite
        </span>
      </button>
      <button class="header-icons" @click="$emit('carrinho')">
        <span class="material-icons md-24">
          <div class="cart-count">{{ cartCount }}</div>
          shopping_cart
        </span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    cartCount: {
      type: Number,
      require: true,
    },
    favCount: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style>
.header-menu {
  display: flex;
  justify-content: space-between;
  height: 70px;
  background: #8dd7cf;
  align-items: center;
}

.header-logo {
  padding-left: 30px;
}

.header-search {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 3px;
  height: fit-content;
  width: 400px;
}

.header-search:focus-within {
  border: 2px solid #97bec2;
}

.header-search input {
  outline: none;
  border: none;
  background: none;
  padding: 10px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
}

.header-search span {
  margin-right: 10px;
  color: #4b5c6b;
  cursor: pointer;
}

.header-btn {
  padding-right: 30px;
}

.header-icons {
  background: none;
  border: none;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}

.fav-count {
  position: relative;
  background-color: yellow;
  border-radius: 100px;
  top: 12px;
  left: 12px;
  color: black;
  font-size: 12px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-count {
  position: relative;
  background-color: yellow;
  border-radius: 100px;
  top: 12px;
  left: 12px;
  color: black;
  font-size: 12px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
