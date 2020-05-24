<template>
    <div class="ebook-reader">
        <div id="reader"></div>
    </div>

</template>


<script>
    // epub插件
    import Epub from 'epubjs'
    // 获取vux中的数据
    import {mapGetters} from 'vuex'

    global.epub = Epub
    export default {
        computed: {
            // 获取vux中的数据
            ...mapGetters(['fileName'])
        },
        methods: {
            prevPage(){
              if(this.rendition){
                  this.rendition.prev()
              }
            },
            nextPage(){
                if(this.rendition){
                    this.rendition.next()
                }
            },
            initEpub(fileName) {
                const url = 'http://49.233.93.180:83/epub/' + fileName + '.epub'
                this.book = new Epub(url)
                this.rendition = this.book.renderTo('reader', {
                    width: innerWidth,
                    height: innerHeight,
                    method: 'default'
                })
                this.rendition.display()
                this.rendition.on('touchstart', event => {
                    this.touchStartX = event.changedTouches[0].pageX
                    this.touchStartTime = event.timeStamp

                })
                this.rendition.on('touchend', event => {
                    const pagex = event.changedTouches[0].pageX - this.touchStartX
                    const time = event.timeStamp - this.touchStartTime
                    if(pagex>40 && time<500){
                        // 从左边往右边滑动
                        this.prevPage()
                    }else if(pagex <-40 && time<500){
                        //从右边往左边滑动
                        this.nextPage()
                    }else{
                        //展示标题
                        this.showTitle
                    }
                    event.stopPropagation()
                    event.preventDefault()
                })
            }
        },
        mounted: function () {
            const fileName = this.$route.params.fileName.split('|').join('/');
            this.initEpub(fileName)
        }
    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .ebook-reader {
        width: 100%;
        height: 100%;
        overflow: hidden;
        /*.ebook-reader-mask {*/
        /*    position: absolute;*/
        /*    top: 0;*/
        /*    left: 0;*/
        /*    background: transparent;*/
        /*    z-index: 150;*/
        /*    width: 100%;*/
        /*    height: 100%;*/
        /*}*/
    }
</style>