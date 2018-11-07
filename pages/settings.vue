<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form @submit.prevent="updateSettings()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="currentUser.image"
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="currentUser.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your username">
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="currentUser.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"/>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="currentUser.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="currentUser.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <!-- Line break for logout button -->
          <hr>
          <button
            class="btn btn-outline-danger"
            @click="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOGOUT, UPDATE_USER } from '@/store/actions.type'

export default {
  name: 'RwvSettings',
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    updateSettings() {
      this.$store.dispatch(UPDATE_USER, this.currentUser).then(() => {
        // #todo, nice toast and no redirect
        this.$router.push('/')
      })
    },
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
