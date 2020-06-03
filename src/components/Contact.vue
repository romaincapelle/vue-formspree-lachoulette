<template>
  <div class="container max-w-2xl px-4 py-4 mx-auto">
    <h1 class="text-2xl ">Bienvenue sur le drive de la choulette</h1>
    <p class="text-sm my-2">
      Ouvert du lundi au vendredi de 8h à 12h et de 14h à 18h et le samedi matin
      de 9h à 12h. Pour commander en ligne et venir retirer en magasin, veuillez
      remplir le formulaire ci-dessous.
    </p>
    <form class="my-6" role="form" method="POST" @submit.prevent="sendEmail">
      <div>
        <label class="mt-6 block text-gray-700 text-sm font-bold mb-2"
          >Votre Nom</label
        >
        <input
          class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          placeholder="Name"
          v-model="nameMsg"
        />
      </div>
      <div>
        <label class="mt-6 block text-gray-700 text-sm font-bold mb-2"
          >Votre Email</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="_replyto"
          placeholder="abc@abc.com"
          v-model="emailMsg"
        />
      </div>
      <div>
        <label class="mt-6 block text-gray-700 text-sm font-bold mb-2"
          >Message</label
        >
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
          rows="5"
          placeholder="Message"
          v-model="messageMsg"
        ></textarea>
      </div>

      <BeerForm @submit="addBeer" />
      <h3 v-if="beers.length > 0">beer</h3>
      <ul>
        <ListBeer
          v-for="(beer, i) in beers"
          :key="i"
          :beer="beer"
          @delete="deleteBeer(i)"
        />
      </ul>
      <div class="my-8">
        <button
          class=" w-full text-sm border-2 py-1 px-2 hover:bg-white hover:text-grey bg-yellow h-12"
          type="submit"
        >
          Finaliser la commande
        </button>
      </div>
    </form>
    <p class="border p-6 my-8">
      L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.
      BIÈRES ARTISANALES FABRIQUÉES EN FRANCE. CONTIENT DU MALT D’ORGE. LA VENTE
      D'ALCOOL À DES MINEURS DE MOINS DE 18 ANS EST INTERDITE. EN ACCÉDANT À NOS
      OFFRES, VOUS DÉCLAREZ AVOIR AU MOINS 18 ANS. LA CONSOMMATION DE BOISSONS
      ALCOOLISÉES PENDANT LA GROSSESSE, MÊME EN FAIBLE QUANTITÉ, PEUT AVOIR DES
      CONSÉQUENCES GRAVES SUR LA SANTÉ DE L’ENFANT.
    </p>
  </div>
</template>

<script>
import BeerForm from './BeerForm.vue'
import ListBeer from './ListBeer.vue'
import axios from 'axios'

export default {
  data() {
    return {
      nameMsg: '',
      emailMsg: '',
      messageMsg: '',
      error: false,
      beers: [],
      completed: [],
      under18: false
    }
  },
  methods: {
    addBeer(beer) {
      this.beers.push(beer)
      this.$emit('updatedbeers', this.beers)
    },
    sendEmail() {
      axios
        .post('https://formspree.io/xknqrrzq', {
          name: this.nameMsg,
          from: this.emailMsg,
          _subject: `${this.nameMsg} | Message du Drive`,
          message: this.messageMsg,
          beers: this.beers
        })
        .catch(error => {
          if (error.response) {
            alert(error.response.data)
          }
        })
    }
  },
  components: {
    BeerForm,
    ListBeer
  }
}
</script>
