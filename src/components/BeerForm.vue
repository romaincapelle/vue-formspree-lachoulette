<template>
  <div>
    <hr class="mt-6" />
    <form @submit.prevent="submit">
      <h2 class="text-xl mt-6">Etape 02 - Ma commande</h2>
      <p class="text-sm my-2">Choisissez la quantité et le type de bière</p>
      <div class="flex items-center">
        <div class="w-1/5 mr-3">
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
        <div class="w-1/5">
          <button
            class=" w-full text-sm border-2 py-1 px-2 hover:bg-white hover:text-grey bg-yellow"
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
        { text: 'Biere Blonde', value: '001' },
        { text: 'Biere Brune', value: '002' },
        { text: 'Biere Ambrée', value: '003' }
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
