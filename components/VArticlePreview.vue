<template>
  <div class="article-preview">
    <rwv-article-meta
      :article="article"
      :is-preview="true"/>
    <router-link
      :to="'/articles/'+ article.slug"
      class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          v-for="(tag, index) of article.tagList"
          :key="tag + index"
          class="tag-default tag-pill tag-outline">
          {{ tag }}
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
import RwvArticleMeta from '@/components/ArticleMeta'

export default {
  name: 'RwvArticlePreview',
  components: {
    RwvArticleMeta
  },
  props: {
    article: { type: Object, required: true }
  }
}
</script>
