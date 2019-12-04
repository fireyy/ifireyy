<template>
    <div>
      <Header />
      <div class="container">
        <div class="subtitle">404</div>
        <h2 class="mt-4">Sorry about that, it looks like we can't find what you’re looking for.</h2>
        <p class="mt-6">We can't find the page or article you're looking for. Please contact us if you're having trouble finding anything or think you've found an issue with the website.</p>
      </div>
      <Footer />
    </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>