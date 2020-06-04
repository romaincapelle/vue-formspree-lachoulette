<template>
  <div>
    <form @submit.prevent="submit" class="px-10">
      <h2 class="text-xl mt-6">Etape 02 - Ma commande</h2>
      <p class=" my-2">Choisissez la quantité et le type de bière</p>
      <div class="flex items-stretch">
        <div class="w-1/2 mr-3 py-5">
          <input
            class="w-full flex-shrink-0 my-2 w-10 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Ex: 24"
            v-model.number="biere.nombreDeBiere"
          />
        </div>
        <div class="mr-3 w-3/5">
          <select
            class="  w-full mr-3 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            v-model="biere.nomDeLaBiere"
          >
            <option
              v-for="biere in bieres"
              :value="biere.text"
              :key="biere.value"
            >
              {{ biere.text }}
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
        <div class="w-1/2 py-5">
          <button
            class=" w-full  border-2 py-1 px-2 hover:bg-white hover:text-grey bg-yellow"
            type="submit"
            title="save"
          >
            Ajouter
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'biereForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  data() {
    return {
      biere: {
        nomDeLaBiere: '',
        nombreDeBiere: 12
      },
      selectedOption: 'C',
      bieres: [
        { id: '00001', text: 'Alien porter Blackout bière noire 33cl 8%' },
        { id: '00001', text: 'Choulette de Noël 33cl 7%' },
        { id: '00001', text: 'Choulette de Noël 75cl 7%' },
        { id: '00001', text: "L'Abbaye de Vaucelles 75cl 7,5% vol." },
        { id: '00001', text: 'La battle of Cambrai 75cl 6% vol.' },
        { id: '00001', text: 'La Blanche de Cambrai 33cl 5% vol.' },
        { id: '00001', text: 'La Blanche de Cambrai 75cl 5% vol.' },
        { id: '00001', text: 'La Choulette ambrée 33cl 8% vol.' },
        { id: '00001', text: 'La Choulette Ambrée 75cl 8% vol.' },
        { id: '00001', text: 'La Choulette ambrée Triple 75CL 9% vol.' },
        { id: '00001', text: 'La Choulette blonde 33cl 7,5% vol.' },
        { id: '00001', text: 'La Choulette blonde 75cl 7,5% vol.' },
        { id: '00001', text: 'La Choulette blonde Triple 75CL 8,5% vol.' },
        { id: '00001', text: 'La Choulette brune 33cl 7% vol.' },
        { id: '00001', text: 'La Choulette brune 75cl 7% vol.' },
        { id: '00001', text: 'La Choulette cerise 33cl 5% vol.' },
        { id: '00001', text: 'La Choulette fraise 33cl 5% vol' },
        { id: '00001', text: 'La Choulette framboise 33cl 6% vol.' },
        { id: '00001', text: 'La Choulette pêche 33cl 5% vol.' },
        { id: '00001', text: 'La Choulette printemps 33cl 6% vol.' },
        { id: '00001', text: 'La Choulette printemps 75cl 6% vol.' },
        { id: '00001', text: 'La Hé Biloute Ambrée 75cl 8,5% vol.' },
        { id: '00001', text: 'La Hé Biloute Blonde 75cl 7% vol.' },
        { id: '00001', text: 'La porte du Hainaut Ambrée 33cl 7% vol.' },
        { id: '00001', text: 'La porte du Hainaut ambrée 75cl 7% vol.' },
        { id: '00001', text: 'La Porte du Hainaut blonde 33cl 6% vol.' },
        { id: '00001', text: 'La porte du Hainaut Blonde 75cl 6% vol.' },
        {
          id: '00001-culottesambree33cl9vol',
          text: 'La Sans-culottes ambrée 33cl 9% vol.'
        },
        {
          id: '00001-culottesambree75cl9vol',
          text: 'La Sans-culottes ambrée 75cl 9% vol.'
        },
        {
          id: '00001-culottesblondecorsee33cl85vol',
          text: 'La Sans-culottes blonde corsée 33cl 8,5% vol.'
        },
        {
          id: '00001-culottesblondecorsee75cl85vol',
          text: 'La Sans-culottes blonde corsée 75cl 8,5% vol.'
        },
        {
          id: '00001-culottesblondelegere33cl6vol',
          text: 'La Sans-culottes blonde légère 33cl 6% vol.'
        },
        {
          id: '00001-culottesblondelegere75cl6vol',
          text: 'La Sans-culottes blonde légère 75cl 6% vol.'
        },
        {
          id: '00001-culottescerise33cl5vol',
          text: 'La Sans-culottes cerise 33cl 5% vol.'
        },
        {
          id: '00001-culotteshistorique33cl7vol',
          text: 'La Sans-culottes historique 33cl 7% vol.'
        },
        {
          id: '00001-culotteshistorique75cl7vol',
          text: 'La Sans-culottes historique 75cl 7% vol.'
        },
        { id: '00001', text: "La Tour d'Ostrevant 75cl 8,5% vol." },
        { id: '00001', text: 'La Triboulette 75cl 5% vol.' },
        { id: '00001', text: 'La Val des Cygnes Bio 33cl 7,5% vol.' },
        { id: '00001', text: 'La Val des Cygnes Bio 75cl 7,5% vol.' },
        { id: '00001', text: 'La Wilfred Owen 75cl 8,5% vol.' }
      ]
    }
  },
  methods: {
    clearForm() {
      this.biere = {
        nomDeLaBiere: '',
        nombreDeBiere: null
      }
    },
    submit() {
      if (
        this.biere.nomDeLaBiere !== '' &&
        this.biere.nombreDeBiere !== null &&
        this.biere.nombreDeBiere >= 1 &&
        this.biere.nombreDeBiere <= 1000
      ) {
        this.$emit('submit', this.biere)
        this.clearForm()
        this.close()
      }
    },
    close() {
      this.$emit('close')
    }
  },
  created() {
    if (!this.populateWith.empty) {
      this.biere = this.populateWith
    }
  }
}
</script>
