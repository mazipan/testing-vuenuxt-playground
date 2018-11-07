<template>
  <div class="home-global">
    <RwvArticleList type="all" />
  </div>
</template>
<script>
import RwvArticleList from '@/components/ArticleList'

export default {
  name: 'RwvHomeGlobal',
  components: {
    RwvArticleList
  }
}
</script>
