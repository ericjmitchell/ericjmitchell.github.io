<template>
  <div id="app">
    <img src="./assets/logo.png">
  <dimage v-bind="item"  v-for="(item) in dimages" :key="item.imageId">
  </dimage>
<dcheckbox v-bind="{ dimageId:'banner-name-black_desk'}"></dcheckbox>
  <!--<dcheckbox v-for="(check, index) in dimages" :key="index" :dimage="check"></dcheckbox>-->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import dimage from './components/image.vue'
import dcheckbox from './components/checkbox.vue'

export default {
  name: 'app',
  components: {
    dimage,
    dcheckbox
  },
  computed: {
    dimages () {
      return this.$store.state.dimages
    }
  },
  methods: {
    ...mapMutations([
      'toggleVisibility',
      'getDImage'
    ])
  }
}
</script>
