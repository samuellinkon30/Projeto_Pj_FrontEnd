<template>

  <div class="geral">
   <page-header :title="title"/>

   <h1 class="titulo">Registre-se Aqui</h1>

   <div class="info">

      <form @submit.prevent="sendEmail">
      <label>Nome:</label>
      <input type="text" name="Nome" v-model="name" value="Seu Nome Aui" required="required">
      <br><br>
      <label>Email:</label>
      <input type="email" name="Email" v-model="email" value="Seu Eamil Aqui" required="required">
      <br><br>
      <label>Senha:</label>
      <input type="text" name="Senha" v-model="senha" value="Sua senha aqui" required="required">
      <br><br>
      <button>ENVIAR</button>
    </form>
  </div>


  </div>
</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
  data() {
    return {
      title: 'Sua Empresa',
      name: '',
      email: '',
      emailContact: 'comercial@polijuniorengenharia.com.br',
      phone: ' (81)  3184-7500',
    };
  },
  data() {
    return {
      title: 'Poli Junior Engenharias',
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    sendEmail() {},
  },
};
</script>

<style>
  button{
    margin-left: 10%;
  }
  .titulo
  {
    font-size: 30px;
    padding: 3%;
    color: #e89f00;

  }
  .info{
    padding: 5%;
    margin-left: 35%;
    color: black;
    float: left;
  }
  body
  {
     background-color: white;  }

@media screen and (max-width: 320px)
{
  .titulo
  {
    font-size: 30px;
    padding: 5%;
    color: #e89f00;

  }
  .mapa{
    border-radius: 10%;
    width:90%;
    height: 50%;
    padding: 5%;
  }
  .info{
    padding: 5%;
    color: white;
  }
  .geral
  {
     background-image: url("../assets/fundo.jpg");
     background-size: cover;
  }
  .contatogeral
  {
    color: white;
  }
}

</style>
