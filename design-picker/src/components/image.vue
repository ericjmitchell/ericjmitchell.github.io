<template  >
  <div v-if="visibility" :id="imageId"><img :src="source" :width="iWidth" :height="iHeight"/></div>
</template>


<script>
export default {
  name: 'dimage',
  props: {
    imageId: String,
    source: String,
    iWidth: Number,
    iHeight: Number,
    visibility: Boolean
  }
}
</script>

<style scoped>
div {
  left: 100px;
  margin: 50px;
}

#banner-name-black_desk {
  position: absolute;
  z-index: 0;
}
#banner-name-white_desk {
  position: absolute;
  z-index: 1;
}
#banner-sun-color_desk {
  position: absolute;
  z-index: 2;
}
#banner-sun_desk {
  position: absolute;
  z-index: 3;
}
#zelda-9_desk {
  position: absolute;
  z-index: 4;
}
#zelda-8_desk {
  position: absolute;
  z-index: 5;
}
#zelda-7_desk {
  position: absolute;
  z-index: 6;
}
#zelda-6_desk {
  position: absolute;
  z-index: 7;
}
#zelda-5_desk {
  position: absolute;
  z-index: 8;
}
#zelda-4_desk {
  position: absolute;
  z-index: 9;
}
#zelda-3_desk {
  position: absolute;
  z-index: 10;
}
#zelda-2_desk {
  position: absolute;
  z-index: 11;
}
#zelda-1_desk {
  position: absolute;
  z-index: 12;
}
#skyrim-9_desk {
  position: absolute;
  z-index: 13;
}
#skyrim-8_desk {
  position: absolute;
  z-index: 14;
}
#skyrim-7_desk {
  position: absolute;
  z-index: 15;
}
#skyrim-6_desk {
  position: absolute;
  z-index: 16;
}
#skyrim-5_desk {
  position: absolute;
  z-index: 17;
}
#skyrim-4_desk {
  position: absolute;
  z-index: 18;
}
#skyrim-3_desk {
  position: absolute;
  z-index: 19;
}
#skyrim-2_desk {
  position: absolute;
  z-index: 20;
}
#skyrim-1_desk {
  position: absolute;
  z-index: 21;
}
#glyphs-sg1-9_desk {
  position: absolute;
  z-index: 22;
}
#glyphs-sg1-8_desk {
  position: absolute;
  z-index: 23;
}
#glyphs-sg1-7_desk {
  position: absolute;
  z-index: 24;
}
#glyphs-sg1-6_desk {
  position: absolute;
  z-index: 25;
}
#glyphs-sg1-5_desk {
  position: absolute;
  z-index: 26;
}
#glyphs-sg1-4_desk {
  position: absolute;
  z-index: 27;
}
#glyphs-sg1-3_desk {
  position: absolute;
  z-index: 28;
}
#glyphs-sg1-2_desk {
  position: absolute;
  z-index: 29;
}
#glyphs-sg1-1_desk {
  position: absolute;
  z-index: 30;
}
#glyphs-atlantis-9_desk {
  position: absolute;
  z-index: 31;
}
#glyphs-atlantis-8_desk {
  position: absolute;
  z-index: 32;
}
#glyphs-atlantis-7_desk {
  position: absolute;
  z-index: 33;
}
#glyphs-atlantis-6_desk {
  position: absolute;
  z-index: 34;
}
#glyphs-atlantis-5_desk {
  position: absolute;
  z-index: 35;
}
#glyphs-atlantis-4_desk {
  position: absolute;
  z-index: 36;
}
#glyphs-atlantis-3_desk {
  position: absolute;
  z-index: 37;
}
#glyphs-atlantis-2_desk {
  position: absolute;
  z-index: 38;
}
#glyphs-atlantis-1_desk {
  position: absolute;
  z-index: 39;
}
#klingon-9_desk {
  position: absolute;
  z-index: 40;
}
#klingon-8_desk {
  position: absolute;
  z-index: 41;
}
#klingon-7_desk {
  position: absolute;
  z-index: 42;
}
#klingon-6_desk {
  position: absolute;
  z-index: 43;
}
#klingon-5_desk {
  position: absolute;
  z-index: 44;
}
#klingon-4_desk {
  position: absolute;
  z-index: 45;
}
#klingon-3_desk {
  position: absolute;
  z-index: 46;
}
#klingon-2_desk {
  position: absolute;
  z-index: 47;
}
#klingon-1_desk {
  position: absolute;
  z-index: 48;
}
#elvish-9_desk {
  position: absolute;
  z-index: 49;
}
#elvish-8_desk {
  position: absolute;
  z-index: 50;
}
#elvish-7_desk {
  position: absolute;
  z-index: 51;
}
#elvish-6_desk {
  position: absolute;
  z-index: 52;
}
#elvish-5_desk {
  position: absolute;
  z-index: 53;
}
#elvish-4_desk {
  position: absolute;
  z-index: 54;
}
#elvish-3_desk {
  position: absolute;
  z-index: 55;
}
#elvish-2_desk {
  position: absolute;
  z-index: 56;
}
#elvish-1_desk {
  position: absolute;
  z-index: 57;
}
#celtic-9_desk {
  position: absolute;
  z-index: 58;
}
#celtic-8_desk {
  position: absolute;
  z-index: 59;
}
#celtic-7_desk {
  position: absolute;
  z-index: 60;
}
#celtic-6_desk {
  position: absolute;
  z-index: 61;
}
#celtic-5_desk {
  position: absolute;
  z-index: 62;
}
#celtic-4_desk {
  position: absolute;
  z-index: 63;
}
#celtic-3_desk {
  position: absolute;
  z-index: 64;
}
#celtic-2_desk {
  position: absolute;
  z-index: 65;
}
#celtic-1_desk {
  position: absolute;
  z-index: 66;
}
#starwars-9_desk {
  position: absolute;
  z-index: 67;
}
#starwars-8_desk {
  position: absolute;
  z-index: 68;
}
#starwars-7_desk {
  position: absolute;
  z-index: 69;
}
#starwars-6_desk {
  position: absolute;
  z-index: 70;
}
#starwars-5_desk {
  position: absolute;
  z-index: 71;
}
#starwars-4_desk {
  position: absolute;
  z-index: 72;
}
#starwars-3_desk {
  position: absolute;
  z-index: 73;
}
#starwars-2_desk {
  position: absolute;
  z-index: 74;
}
#starwars-1_desk {
  position: absolute;
  z-index: 75;
}
#atlantian-9_desk {
  position: absolute;
  z-index: 76;
}
#atlantian-8_desk {
  position: absolute;
  z-index: 77;
}
#atlantian-7_desk {
  position: absolute;
  z-index: 78;
}
#atlantian-6_desk {
  position: absolute;
  z-index: 79;
}
#atlantian-5_desk {
  position: absolute;
  z-index: 80;
}
#atlantian-4_desk {
  position: absolute;
  z-index: 81;
}
#atlantian-3_desk {
  position: absolute;
  z-index: 82;
}
#atlantian-2_desk {
  position: absolute;
  z-index: 83;
}
#atlantian-1_desk {
  position: absolute;
  z-index: 84;
}
#ancient-9_desk {
  position: absolute;
  z-index: 85;
}
#ancient-8_desk {
  position: absolute;
  z-index: 86;
}
#ancient-7_desk {
  position: absolute;
  z-index: 87;
}
#ancient-6_desk {
  position: absolute;
  z-index: 88;
}
#ancient-5_desk {
  position: absolute;
  z-index: 89;
}
#ancient-4_desk {
  position: absolute;
  z-index: 90;
}
#ancient-3_desk {
  position: absolute;
  z-index: 91;
}
#ancient-2_desk {
  position: absolute;
  z-index: 92;
}
#ancient-1_desk {
  position: absolute;
  z-index: 93;
}
#english-9_desk {
  position: absolute;
  z-index: 94;
}
#english-8_desk {
  position: absolute;
  z-index: 95;
}
#english-7_desk {
  position: absolute;
  z-index: 96;
}
#english-6_desk {
  position: absolute;
  z-index: 97;
}
#english-5_desk {
  position: absolute;
  z-index: 98;
}
#english-4_desk {
  position: absolute;
  z-index: 99;
}
#english-3_desk {
  position: absolute;
  z-index: 100;
}
#english-2_desk {
  position: absolute;
  z-index: 101;
}
#english-1_desk {
  position: absolute;
  z-index: 102;
}
#stargate-inner_desk {
  position: absolute;
  z-index: 103;
}
#stargate-ring_desk {
  position: absolute;
  z-index: 104;
}
#vertical-words_desk {
  position: absolute;
  z-index: 105;
}
#logo-big-left_desk {
  position: absolute;
  z-index: 106;
}
#logo-big-right_desk {
  position: absolute;
  z-index: 107;
}
#logo-small-left_desk {
  position: absolute;
  z-index: 108;
}
#logo-small-right_desk {
  position: absolute;
  z-index: 109;
}
#circuit-extra_desk {
  position: absolute;
  z-index: 110;
}
#circuit-center_desk {
  position: absolute;
  z-index:111;
}
#vertical-circuit-outer_desk {
  position: absolute;
  z-index: 112;
}
</style>