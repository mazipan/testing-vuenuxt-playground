<template>
  <div>
    <rwv-list-errors
      :errors="errors"/>
    <form
      class="card comment-form"
      @submit.prevent="onSubmit(slug, comment)">
      <div class="card-block">
        <textarea
          v-model="comment"
          class="form-control"
          placeholder="Write a comment..."
          rows="3"/>
      </div>
      <div class="card-footer">
        <img
          :src="userImage"
          class="comment-author-img" >
        <button class="btn btn-sm btn-primary"> Post Comment </button>
      </div>
    </form>
  </div>
</template>

<script>
import RwvListErrors from '@/components/ListErrors'
import { COMMENT_CREATE } from '@/store/actions.type'

export default {
  name: 'RwvCommentEditor',
  components: { RwvListErrors },
  props: {
    slug: { type: String, required: true, default: '' },
    content: { type: String, required: false, default: '' },
    userImage: { type: String, required: false, default: '' }
  },
  data() {
    return {
      comment: this.content || null,
      errors: {}
    }
  },
  methods: {
    onSubmit(slug, comment) {
      this.$store
        .dispatch(COMMENT_CREATE, { slug, comment })
        .then(() => {
          this.comment = null
          this.errors = {}
        })
        .catch(({ response }) => {
          this.errors = response.data.errors
        })
    }
  }
}
</script>
