<template>
    <div class="ebook">
<!--        展示子组件视图-->
        <ebook-reader></ebook-reader>
    </div>
</template>

<script>
    //将子组件注册到父组件中 导入组件
    import EbookReader from '../../components/ebook/ebookReader'
    export default {
        components:{
            EbookReader
        }
    }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .ebook {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
