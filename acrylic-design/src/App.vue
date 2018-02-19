<template>
  <v-app>
    <v-toolbar app>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container class="mx-auto">
      <v-slider class="slider mx-auto" v-model="sliderModel.imageWidth" step="20" ticks max="1780" min="360" thumb-label></v-slider>
      <div class="relative mx-auto" id="images">
      <dimage v-bind="item" v-for="(item) in dimages" :key="item.imageId"></dimage>
      </div>
      </v-container>
      <v-container>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">Banner</div>
            <dcheckbox v-for="(item) in banner" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Circuits</div>
            <dcheckbox v-for="(item) in circuit" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Logos</div>
            <dcheckbox v-for="(item) in logo" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Stargate</div>
            <dcheckbox v-for="(item) in stargate" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Vertical Words</div>
            <dcheckbox v-for="(item) in vertical" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Stargate Languages</div>
            <v-expansion-panel>
              <v-expansion-panel-content>
                <div slot="header">Ancient</div>
                <dcheckbox v-for="(item) in ancient" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Atlantian</div>
                <dcheckbox v-for="(item) in atlantian" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Celtic Style</div>
                <dcheckbox v-for="(item) in celtic" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Elvish</div>
                <dcheckbox v-for="(item) in elvish" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">English</div>
                <dcheckbox v-for="(item) in english" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Sg1 Glyphs</div>
                <dcheckbox v-for="(item) in sg1glyphs" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Atlantis Glyphs</div>
                <dcheckbox v-for="(item) in atglyphs" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Klingon</div>
                <dcheckbox v-for="(item) in klingon" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Skyrim</div>
                <dcheckbox v-for="(item) in skyrim" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Star Wars</div>
                <dcheckbox v-for="(item) in starwars" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header">Zelda</div>
                <dcheckbox v-for="(item) in zelda" :key="`cb-${item.imageId}`" v-bind="{ dimageId:item.imageId}"></dcheckbox>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import dimage from './components/image.vue'
import dcheckbox from './components/checkbox.vue'

export default {
  data () {
    return {
      title: 'Acrylic Design'
    }
  },
  computed: {
    sliderModel () {
      return this.$store.state
    },
    dimages () {
      return this.$store.state.dimages
    },
    banner () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('banner'))
    },
    circuit () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('circuit'))
    },
    logo () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('logo'))
    },
    stargate () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('stargate'))
    },
    vertical () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('vertical'))
    },
    ancient () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('ancient'))
    },
    atlantian () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('atlantian'))
    },
    celtic () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('celtic'))
    },
    elvish () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('elvish'))
    },
    english () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('english'))
    },
    sg1glyphs () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('glyphs-sg1'))
    },
    atglyphs () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('glyphs-atlantis'))
    },
    klingon () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('klingon'))
    },
    skyrim () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('skyrim'))
    },
    starwars () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('starwars'))
    },
    zelda () {
      return this.$store.state.dimages.filter(di => di.imageId.startsWith('zelda'))
    }
  },
  name: 'AcrylicDesign',
  components: {
    dimage,
    dcheckbox
  }
}
</script>

<style scoped>

.slider {
  width: 1000px;
}
.relative {
  position: relative;
}
#images {
  margin: 50px;
  height: 356px;
  width: 1780px;
}
</style>
