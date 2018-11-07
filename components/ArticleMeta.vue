<template>
  <div class="article-meta">
    <router-link
      :to="'/@' + article.author.username">
      <img :src="article.author.image">
    </router-link>
    <div class="info">
      <router-link
        :to="'/@' + article.author.username"
        class="author">
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
    <template v-if="actions">
      <rwv-article-actions
        :article="article"
        :can-modify="isCurrentUser()"
      />
    </template>
    <template v-else>
      <button
        v-if="!actions"
        :class="{
          'btn-primary': article.favorited,
          'btn-outline-primary': !article.favorited
        }"
        class="btn btn-sm pull-xs-right"
        @click="toggleFavorite">
        <i class="ion-heart"/>
        <span class="counter">
          {{ article.favoritesCount }}
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RwvArticleActions from '@/components/ArticleActions'
import { FAVORITE_ADD, FAVORITE_REMOVE } from '@/store/actions.type'

export default {
  name: 'RwvArticleMeta',
  components: {
    RwvArticleActions
  },
  props: {
    article: {
      type: Object,
      required: true
    },
    actions: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'isAuthenticated'])
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.article.author.username) {
        return this.currentUser.username === this.article.author.username
      }
      return false
    },
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: 'login' })
        return
      }
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD
      this.$store.dispatch(action, this.article.slug)
    }
  }
}
</script>
