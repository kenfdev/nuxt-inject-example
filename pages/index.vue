<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-inject-example
      </h1>
      <div>
        <div class="tags has-addons">
          <span class="tag is-primary">Vue.js+Nuxt.js</span>
          <span class="tag">{{ countResult }}</span>
        </div>
        <a class="button is-large"
           :class="{'is-loading': loading}"
           @click="onLoad">Load</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from '~/components/Logo.vue';

import { actionTypes } from '~/store';

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapGetters(['loading', 'countResult']),
  },
  async fetch(context) {
    console.log('fetch: ', context.app);
    return context.store.dispatch(actionTypes.FETCH_GITHUB_STARS);
  },
  methods: {
    onLoad() {
      console.log('onLoad: ', this);
      this.$store.dispatch(actionTypes.FETCH_GITHUB_STARS);
    },
  },
};
</script>

<style>
.tags .tag {
  font-size: 3rem;
  height: 3em;
}
.tags.has-addons {
  justify-content: center;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
