<template>
  <div class="container px-4 py-4 mx-auto">
    <div v-if="!orderCompleted">
      <h1 class="text-2xl ">
        Bienvenue sur le drive du magasin d’usine de La Choulette
      </h1>
      <p class=" my-2">
        Ouvert du lundi au vendredi de 8h à 12h et de 14h à 18h et le samedi
        matin de 9h à 12h. Pour commander en ligne, venir retirer et payer en
        magasin, veuillez remplir le formulaire ci-dessous.
      </p>
      <hr class="mt-6" />
      <div class="xl:flex">
        <div class="xl:w-1/2 my-10">
          <form
            class="my-10"
            role="form"
            method="POST"
            @submit.prevent="sendEmail"
          >
            <div>
              <h2 class="text-xl mt-6">Etape 01 - Mes informations</h2>
              <label class="mt-6 block text-gray-700  font-bold mb-2"
                >Votre Nom</label
              >
              <input
                class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Votre nom"
                v-model="nameMsg"
              />
            </div>
            <div>
              <label class="mt-6 block text-gray-700  font-bold mb-2"
                >Votre Email</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="_replyto"
                placeholder="Votre E-mail"
                v-model="emailMsg"
              />
            </div>
            <div>
              <label class="mt-6 block text-gray-700  font-bold mb-2"
                >Téléphone</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="_replyto"
                placeholder="Ex: 03 27 35 72 44"
                v-model="phoneMsg"
              />
            </div>

            <div>
              <label class="mt-6 block text-gray-700  font-bold mb-2"
                >Vous pouvez nous laisser un commentaire</label
              >
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                rows="5"
                placeholder="Commentaire"
                v-model="messageMsg"
              ></textarea>
            </div>
            <label class="my-6 block text-gray-700  font-bold mb-2"
              >Je me présente à la brasserie à la date indiqué. <br />
              {Ouvert du lundi au vendredi de 8h à 12h et de 14h à 18h et le
              samedi matin de 9h à 12h)</label
            >
            <div>
              <label class="mt-6 block text-gray-700  font-bold mb-2"
                >Date de passage:</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="_replyto"
                locale="fr-fr"
                placeholder="Ex: Vendredi 12 juin 2020 "
                v-model="picker"
              />
            </div>
            <div>
              <label class="mt-6 block text-gray-700 smtext- font-bold mb-2"
                >Heure de passage:</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="_replyto"
                placeholder="Ex: 11h30 "
                v-model="hourMsg"
              />
            </div>

            <hr class="mt-6" />
          </form>
        </div>
        <div class="xl:w-1/2 my-10">
          <BeerForm class="my-6" @submit="addBeer" />
          <h3 v-if="beers.length > 0">Votre Panier</h3>
          <ul>
            <ListBeer
              v-for="(beer, i) in beers"
              :key="i"
              :beer="beer"
              @delete="deleteBeer(i)"
            />
          </ul>
        </div>
      </div>

      <!-- 18 ans > -->
      <div class="flex mt-6">
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox" />
          <span class="ml-2">Je confirme avoir plus de 18 ans.</span>
        </label>
      </div>
      <p class="text-lg mt-2 text-center">
        Après réception de votre message, nous vous recontacterons pour vous
        confirmer la disponibilité et la valeur totale de votre commande par
        téléphone ou par mail.
      </p>
      <div class="my-8">
        <button
          class=" w-full  border-2 py-1 px-2 hover:bg-white hover:text-grey bg-yellow h-12"
          type="submit"
        >
          Finaliser la commande
        </button>
      </div>

      <p class="border p-6 my-8">
        L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC
        MODÉRATION. BIÈRES ARTISANALES FABRIQUÉES EN FRANCE. CONTIENT DU MALT
        D’ORGE. LA VENTE D'ALCOOL À DES MINEURS DE MOINS DE 18 ANS EST
        INTERDITE. EN ACCÉDANT À NOS OFFRES, VOUS DÉCLAREZ AVOIR AU MOINS 18
        ANS. LA CONSOMMATION DE BOISSONS ALCOOLISÉES PENDANT LA GROSSESSE, MÊME
        EN FAIBLE QUANTITÉ, PEUT AVOIR DES CONSÉQUENCES GRAVES SUR LA SANTÉ DE
        L’ENFANT.
      </p>
    </div>
    <div v-else>
      <h1 class="text-2xl ">Merci pour votre Commande</h1>
      <p>
        Merci de verifier les informations ci-dessous. En cas, d'erreur veuillez
        nous contacter au (0)3 27 35 72 44 ou par email à
        contact@lachoulette.com
      </p>
      <p><strong>Votre nom:</strong> {{ nameMsg }}</p>
      <p><strong>Votre Email:</strong> {{ emailMsg }}</p>
      <p><strong>Votre téléphone:</strong> {{ emailMsg }}</p>
      <p>
        {{ nameMsg }}.<br />
        Vous avons recu un email et nous vous attendons le {{ picker }}.
        <br />Crenaux horaire:
        {{ hourMsg }}
      </p>
      <h3 class="text-2xl">Detail</h3>
      <ul>
        <p v-for="beer in beers" :key="beer.id">
          {{ beer.nombreDeBiere }} bouteilles - {{ beer.nomDeLaBiere }}
        </p>
      </ul>
    </div>
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
      phoneMsg: '',
      hourMsg: '',
      messageMsg: '',
      picker: '',
      error: false,
      beers: [],
      completed: [],
      under18: false,
      orderCompleted: false
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
          date: this.picker,
          hourMsg: this.hourMsg,
          message: this.messageMsg,
          beers: this.beers
        })
        .then((this.orderCompleted = true))
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
