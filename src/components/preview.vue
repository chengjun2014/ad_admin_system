<template>
    <div v-if="adInfo.material_type == 'feed'">
        <p class="pre-text">{{adInfo.elements.mblog_text}}</p>
        <template v-for="img in imgs">
            <img class="pre-img" :src="img" alt="">
        </template>
    </div>
    <div v-else-if="adInfo.material_type == 'feed_grid'">
        <p class="pre-text">{{adInfo.elements.mblog_text}}</p>
        <template v-for="img in imgs">
            <img class="pre-img" :src="img.pic_url" alt="">
        </template>
    </div>
    <div v-else-if="adInfo.material_type == 'feed_video'">
        <p class="pre-text">{{adInfo.elements.mblog_text}}</p>
        <div class="video-wrap">
            <i class="icon-play" :class="{'icon-pause': playing}" @click="playVideo"></i>
            <video class="pre-video" id="pre-video" :src="adInfo.elements.video_url1"></video>
        </div>
    </div>
    <div v-else-if="adInfo.material_type == 'feed_activity'">
        <p class="pre-text">{{adInfo.elements.mblog_text}}</p>
        <img class="pre-card" :src="adInfo.elements.ad_url" alt="">
    </div>
</template>

<script>
    import util from "../common/js/util"
    export default {
        data() {
            return {
                //test: []
                playing: false,
                video: null
            }
        },
        props: {
            adInfo: Object
        },
        computed: {
            imgs: function() {


                if (this.adInfo.material_type  == 'feed_grid' ){

                    let grid = Object.assign({},this.adInfo.elements)

                    grid = JSON.parse(grid.grid);

                    return grid.grid

                }

                if (this.adInfo.material_type  == 'feed' ){

                    let pics = JSON.parse(this.adInfo.elements.pics);
                    return pics

                }


            }
        },
        /*watch: {
            adInfo: function() {
                this.test = this.adInfo.elements.pics.split(',');
            }
        }*/
        methods: {
            playVideo(){
                this.video = document.getElementById('pre-video');
                this.playing = !this.playing;
                if (this.playing) {
                    this.video.play();
                } else {
                    this.video.pause();
                }
                var _this = this;
                this.video.onended = function() {
                    _this.playing = false;
                }
            }
        }
    }
</script>

<style scoped>
    .pre-text {
        font-size: 14px;
        line-height: 1.6em;
        color: #333;
    }
    .pre-img {
        width: 92px;
        height: 92px;
        margin: 0 8px 8px 0;
    }
    .video-wrap {
        position: relative;
    }
    .pre-card {
        width: 100%;
    }
    .icon-play {
        position: absolute;
        right: 15px;
        bottom: 10px;
        width: 40px;
        height: 40px;
        z-index: 5;
        background: url(../assets/list_sprite.png) left top no-repeat;
        background-size: cover;
    }
    .icon-pause {
        background: url(../assets/list_sprite.png) left -42px no-repeat;
        background-size: cover;
    }
    .pre-video {
        display: block;
    }
</style>

