<template>
    <Wrap :page="page">
        <article class="mb-20" v-for="post in page.posts" :key="post.permalink">
            <time class="text-2 weight-6">{{ formatDate(post.createdAt) }}</time>
            <h2 class="title-3 mt-4">{{ post.title }}</h2>
            <div class="small mt-6" v-html="post.excerpt"></div>
            <p class="mt-4"><saber-link class="Link small" :to="post.permalink">View</saber-link></p>
        </article>
    </Wrap>
</template>
<script>
import Wrap from '../components/wrap.vue'
import formatDate from '../utils/formatDate'

export default {
  components: {
    Wrap
  },
  props: ['page'],
  computed: {
    feedLink() {
      return this.$feed && this.$feed.permalink
    }
  },
  methods: {
    formatDate
  }
}
</script>