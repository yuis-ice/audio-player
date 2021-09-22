<template>
  <div id="app">

    <Player :autoplay="autoplay" :src="source" style="z-index: 2" :key="componentKey" />
    <div>
      <div class="cards">
        <Playcard
          v-for="song in songs"
          v-bind:key="song.id"
          v-bind:title="song.title" 
          v-bind:src="song.src" 
          v-bind:description="song.description" 
          @click.native='play($event, song.path)'
        />
      </div>
    </div>
    <Menu />
  
  </div>
</template>

<style>
/* <style scoped> */
/* [Scoped style doesn't work · Issue #154 · Akryum/v-tooltip](https://github.com/Akryum/v-tooltip/issues/154) */

  /* :root {
    background-color: teal;
  } */
  
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
  }

  /*  */

  /* [v-tooltip demo](https://akryum.github.io/v-tooltip/#/) */
  .tooltip {
    display: block !important;
    z-index: 10000;
    color: bisque;
  }
  .tooltip .tooltip-inner {
    background: rgb(0, 0, 0);
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }
  .tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }
  .tooltip[x-placement^="top"] {
    margin-bottom: 5px;
  }
  .tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .tooltip[x-placement^="bottom"] {
    margin-top: 5px;
  }
  .tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .tooltip[x-placement^="right"] {
    margin-left: 5px;
  }
  .tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
  .tooltip[x-placement^="left"] {
    margin-right: 5px;
  }
  .tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
  .tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }
  .tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }

  .tooltip.popover .popover-inner {
    background: #f9f9f9;
    color: black;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .1);
  }
  .tooltip.popover .popover-arrow {
    border-color: #f9f9f9;
  }

</style>

<script>
  // import Card from "./Card.vue";
  import Playcard from "./Playcard.vue";
  import Menu from "./Menu.vue";
  import Player from "./Player.vue";

  const moment = require('moment');
  const axios = require('axios');
  // const yaml = require('js-yaml');

  export default {
    name: "app",
    components: {
      // Card,
      Playcard,
      Menu,
      Player,
    },
    data () {
      return {
        source: null,
        componentKey: 0,
        autoplay: true, 
        songs: null,
        // # songs in default uses ./audioplayer.json with axios, 
        // # or you can use inline config instead of the json file 
        // songs: [
        //   {
        //     id: 1, 
        //     title: 'Culture Code - You & I (feat. Alexis Donn)',
        //     src: "../songs/Culture%20Code%20-%20You%20%26%20I%20(feat.%20Alexis%20Donn).jpg",
        //     path: "../songs/Culture%20Code%20-%20You%20%26%20I%20(feat.%20Alexis%20Donn).mp3",
        //     description: "More awesome music from NCS sounds: https://www.youtube.com/c/NoCopyrightSounds"
        //   },

        //   // dummies for the UI 
        //   {
        //     id: 94, 
        //     title: 'Swing_Jazz_Drum',
        //     src: "https://picsum.photos/id/237/200",
        //     path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3",
        //   },
      }
    },
    mounted() {
      console.log(this.songs);

      if (this.songs == null)
        axios
          .get('./audioplayer.json')
          .then(response => {
            let json = response.data
            this.songs = json
          });

    }, 
    methods: {
      play(event, src) {
        this.source = src 
        this.componentKey += 1;
      },
      example() {
      }
    },
  }
</script>
