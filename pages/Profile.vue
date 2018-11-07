<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img
              :src="profile.image"
              class="user-img">
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <div v-if="isCurrentUser()">
              <router-link
                to="/settings"
                class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-gear-a"/> Edit Profile Settings
              </router-link>
            </div>
            <div v-else>
              <button
                v-if="profile.following"
                class="btn btn-sm btn-secondary action-btn"
                @click.prevent="unfollow()">
                <i class="ion-plus-round"/>
                &nbsp;Unfollow {{ profile.username }}
              </button>
              <button
                v-if="!profile.following"
                class="btn btn-sm btn-outline-secondary action-btn"
                @click.prevent="follow()">
                <i class="ion-plus-round"/>
                &nbsp;Follow {{ profile.username }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link
                  :to="'/@' + currentUser.username"
                  class="nav-link"
                  active-class="active"
                  exact>
                  My Articles
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="'/@' + currentUser.username + '/favorites'"
                  class="nav-link"
                  active-class="active"
                  exact>
                  Favorited Articles
                </router-link>
              </li>
            </ul>
          </div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW
} from '@/store/actions.type'

export default {
  name: 'RwvProfile',
  computed: {
    ...mapGetters(['currentUser', 'profile', 'isAuthenticated'])
  },
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_PROFILE, to.params)
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, this.$route.params)
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.profile.username) {
        return this.currentUser.username === this.profile.username
      }
      return false
    },
    follow() {
      if (!this.isAuthenticated) return
      this.$store.dispatch(FETCH_PROFILE_FOLLOW, this.$route.params)
    },
    unfollow() {
      this.$store.dispatch(FETCH_PROFILE_UNFOLLOW, this.$route.params)
    }
  }
}
</script>
