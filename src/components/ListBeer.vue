<template>
  <li class="beer-item">
    <div class="beer-content" v-if="!editing">
      <p>{{ beer.nombreDeBiere }} bouteille(s) de {{ beer.nomDeLaBiere }}</p>
      <span>
        <button type="button" title="delete" @click="deletebeer">
          X
        </button>
        <button
          type="button"
          title="edit"
          @click="editbeer"
          v-if="!isCompleted"
        >
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="pen"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-380 -380 1280 1280"
          >
            <path
              fill="currentColor"
              d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
            ></path>
          </svg>
        </button>
      </span>
    </div>

    <beer-form v-else :populateWith="beer" @close="editbeer" />
  </li>
</template>

<script>
import BeerForm from './BeerForm.vue'

export default {
  name: 'ListBeer',
  props: {
    beer: Object
  },
  components: {
    BeerForm
  },
  data() {
    return {
      editing: false
    }
  },
  methods: {
    deletebeer() {
      this.$emit('delete')
    },
    editbeer() {
      this.editing = !this.editing
    }
  }
}
</script>

<style scoped>
.beer-item {
  margin: 16px 0;
  padding: 8px;
  padding-left: 16px;
  background-color: #42b983;
  border-radius: 8px;
  color: white;
}

.beer-content {
  display: flex;
  justify-content: space-between;
}

span {
  display: flex;
  align-self: center;
  opacity: 0;
  transition: all 0.2s ease-out;
}

.beer-item:hover > .beer-content > span {
  opacity: 1;
}

button {
  /* clear button styling */
  background: none;
  outline: none;
  border: none;
  padding: 0;

  /* custom styling */
  margin-left: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0);
  width: 32px;
  height: 32px;
  color: white;
  transition: all 0.2s ease-in;
}

.delete-button {
  font-weight: bold;
}

.edit-button {
  font-size: 1.2em;
}

.complete-button {
  font-size: 1.2em;
}

button:active {
  background-color: white;
  color: #42b983;
}

button:hover {
  border: 1px solid white;
}

.completed {
  background-color: rgba(66, 185, 131, 0.4);
}

.completed > .beer-content > p {
  text-decoration: line-through;
}
</style>
