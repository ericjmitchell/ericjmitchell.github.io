<template  >
  <div>
    <v-checkbox :label="dimage.name" v-model="dimage.visibility"></v-checkbox>
    <!--<input type="checkbox" :id="dimage.id" 
    :checked="dimage.visibility"
    @change="toggleVisibility({dimage:dimage})"
    >
    <label :for="dimage.id">{{dimage.name}}</label>-->
  </div>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  name: 'dcheckbox',
  props: {dimageId:String},
  computed: {
    dimage: function () {
      console.log("HELELHREPRE");
      let id = this.dimageId;
      return this.$store.state.dimages.find(function (item) {return item.imageId === id});
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