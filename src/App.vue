<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Contact msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Contact
  }
}
</script>
