<template>
  <div>
    <form @submit.prevent="submit" class="px-10">
      <hr class="mt-20 mb-10" />
      <h2 class="text-xl mt-6">Etape 02 - Ma commande</h2>
      <p class=" my-2">Choisissez la quantité et le type de bière</p>
      <div class="flex items-stretch">
        <div class="w-1/2 mr-3 py-5">
          <label> Quantité</label><br />
          <input
            class="w-full flex-shrink-0 w-10 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-yellow"
            type="number"
            placeholder="Ex: 24"
            v-model.number="biere.nombreDeBiere"
          />
        </div>
        <div class="w-1/2 mr-3 py-5">
          <label> Biere</label>
          <select
            class="  w-full mr-3 block appearance-none bg-yellow border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
        <div class="w-1/2 mr-3 py-5">
          <br />
          <button
            class=" w-full  border-2 py-1 px-2 hover:bg-white hover:text-grey bg-yellow hover:border hover:shadow hover:border-yellow add-to-cart-button"
            type="submit"
            title="save"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
      <hr class="mt-10 mb-20" />
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
        { id: '00002', text: 'Choulette de Noël 33cl 7%' },
        { id: '00003', text: 'Choulette de Noël 75cl 7%' },
        { id: '00004', text: "L'Abbaye de Vaucelles 75cl 7,5% vol." },
        { id: '00005', text: 'La battle of Cambrai 75cl 6% vol.' },
        { id: '00006', text: 'La Blanche de Cambrai 33cl 5% vol.' },
        { id: '00007', text: 'La Blanche de Cambrai 75cl 5% vol.' },
        { id: '00008', text: 'La Choulette ambrée 33cl 8% vol.' },
        { id: '00009', text: 'La Choulette Ambrée 75cl 8% vol.' },
        { id: '00010', text: 'La Choulette ambrée Triple 75CL 9% vol.' },
        { id: '00011', text: 'La Choulette blonde 33cl 7,5% vol.' },
        { id: '00012', text: 'La Choulette blonde 75cl 7,5% vol.' },
        { id: '00013', text: 'La Choulette blonde Triple 75CL 8,5% vol.' },
        { id: '00014', text: 'La Choulette brune 33cl 7% vol.' },
        { id: '00015', text: 'La Choulette brune 75cl 7% vol.' },
        { id: '00016', text: 'La Choulette cerise 33cl 5% vol.' },
        { id: '00017', text: 'La Choulette fraise 33cl 5% vol' },
        { id: '00018', text: 'La Choulette framboise 33cl 6% vol.' },
        { id: '00019', text: 'La Choulette pêche 33cl 5% vol.' },
        // { id: '00020', text: 'La Choulette printemps 33cl 6% vol.' },
        // { id: '00021', text: 'La Choulette printemps 75cl 6% vol.' },
        { id: '00022', text: 'La Hé Biloute Ambrée 75cl 8,5% vol.' },
        { id: '00023', text: 'La Hé Biloute Blonde 75cl 7% vol.' },
        // { id: '00024', text: 'La porte du Hainaut Ambrée 33cl 7% vol.' },
        // { id: '00025', text: 'La porte du Hainaut ambrée 75cl 7% vol.' },
        // { id: '00026', text: 'La Porte du Hainaut blonde 33cl 6% vol.' },
        // { id: '00027', text: 'La porte du Hainaut Blonde 75cl 6% vol.' },
        {
          id: '00028-culottesambree33cl9vol',
          text: 'La Sans-culottes ambrée 33cl 9% vol.'
        },
        {
          id: '00029-culottesambree75cl9vol',
          text: 'La Sans-culottes ambrée 75cl 9% vol.'
        },
        {
          id: '00030-culottesblondecorsee33cl85vol',
          text: 'La Sans-culottes blonde corsée 33cl 8,5% vol.'
        },
        {
          id: '00031-culottesblondecorsee75cl85vol',
          text: 'La Sans-culottes blonde corsée 75cl 8,5% vol.'
        },
        {
          id: '00032-culottesblondelegere33cl6vol',
          text: 'La Sans-culottes blonde légère 33cl 6% vol.'
        },
        {
          id: '00033-culottesblondelegere75cl6vol',
          text: 'La Sans-culottes blonde légère 75cl 6% vol.'
        },
        {
          id: '00034-culottescerise33cl5vol',
          text: 'La Sans-culottes cerise 33cl 5% vol.'
        },
        {
          id: '00035-culotteshistorique33cl7vol',
          text: 'La Sans-culottes historique 33cl 7% vol.'
        },
        {
          id: '00036-culotteshistorique75cl7vol',
          text: 'La Sans-culottes historique 75cl 7% vol.'
        },
        { id: '00037', text: "La Tour d'Ostrevant 75cl 8,5% vol." },
        { id: '00038', text: 'La Triboulette 75cl 5% vol.' },
        { id: '00039', text: 'La Val des Cygnes Bio 33cl 7,5% vol.' },
        { id: '00040', text: 'La Sans-Culottes Framboise 33cl 8% vol.' },
        { id: '00041', text: 'La Sans-culottes Noël 33cl 10% vol.' },
        { id: '00042', text: 'La Fourre-Z’y tout 75cl 9% vol.' },
        { id: '00049', text: 'La Choulette carotte IPA 33cl 5% vol.' },
        { id: '00050', text: 'La Choulette framboise 75cl 6% vol.' },
        { id: '00051', text: 'Knockout 33cl 8% vol.' },
        { id: '00052', text: 'Choulette Double IPA 75cl 8% vol.' },
        { id: '00053', text: 'Choulette de Noël 33cl 7%' },
        { id: '00054', text: 'La Val des Cygnes Bio 33cl 7,5% vol.' },
        { id: '00055', text: 'La Hé Biloute Ambrée 75cl 8,5% vol.' },
        // { id: '00056', text: 'Abbaye Saint Vincent 75cl 8,5% vol.' },
        { id: '00057', text: 'BANNETON ÉCOSSAIS NOËL' },
        {
          id: '00058',
          text: 'COFFRET 4X33CL SANS CULOTTES, CHOULETTE DE NOËL+ 2 VERRES'
        },
        { id: '00059', text: 'PETITE CORBEILLE MÉTAL NOËL' },
        { id: '00060', text: 'PETIT CARRÉ NOËL' },
        { id: '00061', text: 'PETITE CORBEILLE MÉTAL' },
        { id: '00062', text: 'COFFRET 4X33CL + 2 VERRES CHOULETTE' },
        { id: '00063', text: 'CORBEILLE MÉTAL CARRÉ NOIRE' },
        { id: '00064', text: 'COFFRET 2X75CL + 1 VERRE CHOULETTE' },
        { id: '00065', text: 'CORBEILLE MÉTAL DORÉE 75CL+33CL' },
        { id: '00066', text: 'PETITE ECLISSE BEIGE NATUREL' },
        { id: '00067', text: 'COFFRET 4X33CL + 2 VERRES SANS-CULOTTES' },
        { id: '00068', text: 'BANNETON COUVERCLE' },
        { id: '00069', text: 'PANIER CORDES' },
        { id: '00070', text: 'COFFRET 2X75CL + 2 VERRES SANS CULOTTES' },
        { id: '00071', text: 'PANIER BORDEAUX SANS VERRES' },
        { id: '00072', text: 'CORBEILLE MÉTAL DORÉE 75CL' },
        { id: '00073', text: 'PANIER BORDEAUX AVEC VERRES' },
        { id: '00074', text: 'GRAND PANIER RECTANGLE GRIS GARNI' }
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

<style scoped>
.add-to-cart-button {
  min-height: 36px;
}

.add-to-cart-button:hover {
  min-height: 36px;
  border: 1px solid #ebb716;
}
</style>
