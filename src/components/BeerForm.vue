<template>
  <form @submit.prevent="submit" id="biere-form">
    <input
      type="text"
      placeholder="Ex: 24"
      v-model.number="biere.nombreDeBiere"
    />
    <select v-model="biere.nomDeLaBiere" class="select-css">
      <option v-for="biere in bieres" :value="biere.text" :key="biere.value">
        {{ biere.text }}
      </option>
    </select>

    <button type="submit" title="save">Ajouter</button>
    <button
      type="button"
      title="cancel"
      class="cancel-button"
      @click="close"
      v-if="!populateWith.empty"
    >
      +
    </button>
  </form>
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
        nombreDeBiere: 0
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

<style scoped>
#biere-form {
  display: flex;
  margin: 24px;
  margin-bottom: 32px;
  justify-content: center;
}

label {
  margin-right: 16px;
}

input {
  display: block;
  margin: 8px 0;
  padding: 8px;
  border-radius: 3px;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
}

input:focus {
  border: 0.5px solid #42b983;
  outline: 0;
  box-shadow: none;
}

.cancel-button {
  font-size: 0.83em;
}

button:active {
  background-color: #42b983;
  color: white;
}
</style>
