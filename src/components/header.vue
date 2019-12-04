<template>
    <header>
        <div class="Logo">
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            </a>
            <span v-if="page && page.title">
                {{ page.title }}
            </span>
        </div>
        <div class="Menu">
            <a v-if="$themeConfig.social.rss && $feed" :href="$feed.permalink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rss"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                Rss
            </a>
        </div>
    </header>
</template>
<script>
export default {
  props: ['page']
}
</script>