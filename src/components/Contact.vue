<template>
  <div>
    <form role="form" method="POST" @submit.prevent="sendEmail">
      <div>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          class="form-control col-12"
          placeholder="Name"
          v-model="nameMsg"
        />
      </div>
      <div class="form-group col-sm-6">
        <label>Your Email</label>
        <input
          type="email"
          name="_replyto"
          class="form-control col-12"
          placeholder="abc@abc.com"
          v-model="emailMsg"
        />
      </div>
      <div class="form-group col-sm-12">
        <label>Message</label>
        <textarea
          name="message"
          class="form-control col-12"
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
      <p>{{ beers }}</p>
      <input type="submit" />
    </form>
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
      completed: []
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
