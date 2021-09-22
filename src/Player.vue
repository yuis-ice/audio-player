<template>
    <div>

        <div class="gap-example">
        <audio v-if="autoplay" ref="player" autoplay>
            <source v-bind:src="src" type="audio/mpeg">
        </audio>
        <audio v-if="!autoplay" ref="player">
            <source v-bind:src="src" type="audio/mpeg">
        </audio>
        </div>

    </div>
</template>

<style scoped>
  /* .green-audio-player { */
  .gap-example.green-audio-player {
    position: fixed;
    z-index: 2;
    width: -webkit-fill-available;
    bottom: 0px;
    padding: 20px;
    margin: 1em;
  }
</style>

<script>
    import 'green-audio-player/dist/css/green-audio-player.min.css';
    import GreenAudioPlayer from 'green-audio-player/dist/js/green-audio-player.js';

    export default {
        name: "Player",
        props: {
            src: {
                default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3",
                type: String
            },
            autoplay: {
                default: true,
                type: Boolean
            }
        },

        mounted() {
            // new GreenAudioPlayer('.gap-example');
            GreenAudioPlayer.init({
                selector: '.gap-example',
                stopOthersOnPlay: true,
                enableKeystrokes: true,
            });
        }, 
            
    }
</script>