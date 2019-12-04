<template>
    <footer>
        <a :href="`mailto:${$siteConfig.email}`">Contact</a>
        <a :href="`https://github.com/${social.github}`">Github</a>
        <a :href="`https://twitter.com/${social.twitter}`">Twitter</a>
        <a v-if="social.rss && feed" :href="feed.permalink">Rss</a>
    </footer>
</template>
<script>
export default {
    computed: {
        social() {
            return this.$themeConfig.social || {}
        },
        feed() {
            return this.$feed
        }
     }
}
</script>