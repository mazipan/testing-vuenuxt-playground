<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand">
        conduit
      </router-link>
      <ul
        v-if="!isAuthenticated"
        class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            active-class="active"
            exact>
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
            active-class="active"
            exact>
            <i class="ion-compose"/>Sign in
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/register"
            class="nav-link"
            active-class="active"
            exact>
            <i class="ion-compose"/>Sign up
          </router-link>
        </li>
      </ul>
      <ul
        v-else
        class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            active-class="active"
            exact>
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/editor/"
            class="nav-link"
            active-class="active">
            <i class="ion-compose"/>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/settings"
            class="nav-link"
            active-class="active"
            exact>
            <i class="ion-gear-a"/>&nbsp;Settings
          </router-link>
        </li>
        <li
          v-if="currentUser.username"
          class="nav-item">
          <router-link
            :to="'/@' + currentUser.username"
            class="nav-link"
            active-class="active"
            exact>
            {{ currentUser.username }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RwvHeader',
  computed: {
    ...mapGetters(['currentUser', 'isAuthenticated'])
  }
}
</script>
