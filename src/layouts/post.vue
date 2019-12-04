<template>
    <Wrap :page="page">
        <article itemscope itemtype="http://schema.org/BlogPosting">
            <time class="text-2 weight-6" itemprop="datePublished">{{ formatDate(page.createdAt) }}</time>
            <h2 class="title-3 mt-4" itemprop="name headline">{{ page.title }}</h2>

            <div class="Markdown" itemprop="articleBody">
                <slot name="default"/>
            </div>

            <a class="u-url" :href="page.permalink" hidden></a>
        </article>
    </Wrap>
</template>

<script>
import formatDate from '../utils/formatDate'
import Wrap from '../components/wrap.vue'
export default {
  components: {
    Wrap
  },
  props: ['page'],
  methods: {
    formatDate
  }
}
</script>