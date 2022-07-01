<template>
  <div class="checkout-finalizar">
    <div class="checkout-form">
      <h1>Finalizar compra</h1>
      <input class="checkout-name" type="text" placeholder="Nome Completo" />
      <div class="checkout-campos">
        <input class="checkout-cpf" type="text" placeholder="CPF" />
        <input class="checkout-cel" type="text" placeholder="Celular" />
      </div>
      <input class="checkout-email" type="text" placeholder="E-mail" />
      <div class="checkout-campos">
        <input class="checkout-cep" type="text" placeholder="CEP" />
        <input class="checkout-endereco" type="text" placeholder="Endereço" />
      </div>
      <div class="checkout-campos">
        <input class="checkout-cidade" type="text" placeholder="Cidade" />
        <input class="checkout-estado" type="text" placeholder="Estado" />
      </div>
    </div>
    <div class="checkout-purchase">
      <div class="checkout-puchase-info">
        <p>imagem</p>
        <p>nome</p>
        <p>Qtd</p>
        <p>preço</p>
      </div>
      <div>
        <button class="checkout-purchase-btn">Finalizar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.checkout-finalizar {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 20px;
  height: 60vh;
  max-width: 100%;
  justify-items: center;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  grid-column: 1;
  justify-content: space-evenly;
}

.checkout-form h1 {
  font-size: 3rem;
  font-weight: 500;
}

.checkout-name {
  outline: none;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 100%;
}

.checkout-campos {
  display: flex;
  justify-content: space-around;
}

.checkout-cpf {
  outline: none;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 50%;
  margin-right: 10px;
}
.checkout-cel {
  outline: none;
  padding: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 50%;
  margin-left: 10px;
}

.checkout-email {
  outline: none;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 100%;
}

.checkout-cep {
  outline: none;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 30%;
  margin-right: 10px;
}
.checkout-endereco {
  outline: none;
  padding: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 70%;
  margin-left: 10px;
}

.checkout-cidade {
  outline: none;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 50%;
  margin-right: 10px;
}
.checkout-estado {
  outline: none;
  padding: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  width: 50%;
  margin-left: 10px;
}

.checkout-purchase {
  display: flex;
  grid-column: 2;
  justify-content: space-evenly;
}

.checkout-puchase-info {
  display: flex;
}

.checkout-purchase-btn {
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
