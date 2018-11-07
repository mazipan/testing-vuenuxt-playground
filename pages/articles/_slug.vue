<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <RwvArticleMeta
          :article="article"
          :actions="true"
        />
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-xs-12">
          <div v-html="parseMarkdown(article.body)"/>
          <ul class="tag-list">
            <li
              v-for="(tag, index) of article.tagList"
              :key="tag + index">
              <RwvTag
                :name="tag"
                class-name="tag-default tag-pill tag-outline"/>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="article-actions">
        <RwvArticleMeta
          :article="article"
          :actions="true"
        />
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <RwvCommentEditor
            v-if="isAuthenticated"
            :slug="slug"
            :user-image="currentUser.image"/>
          <p v-else>
            <router-link to="/login">Sign in</router-link>
            or
            <router-link to="/register">sign up</router-link>
            to add comments on this article.
          </p>
          <RwvComment
            v-for="(comment, index) in comments"
            :slug="slug"
            :comment="comment"
            :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import marked from 'marked'
import store from '@/store'
import RwvArticleMeta from '@/components/ArticleMeta'
import RwvComment from '@/components/Comment'
import RwvCommentEditor from '@/components/CommentEditor'
import RwvTag from '@/components/VTag'
import { FETCH_ARTICLE, FETCH_COMMENTS } from '@/store/actions.type'

export default {
  name: 'RwvArticle',
  components: {
    RwvArticleMeta,
    RwvComment,
    RwvCommentEditor,
    RwvTag
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_ARTICLE, to.params.slug),
      store.dispatch(FETCH_COMMENTS, to.params.slug)
    ]).then(() => {
      next()
    })
  },
  computed: {
    ...mapGetters(['article', 'currentUser', 'comments', 'isAuthenticated'])
  },
  methods: {
    parseMarkdown(content) {
      return marked(content)
    }
  }
}
</script>
