<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="128" height="128" :src="seller.avatar"/>
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{ seller.name }}</span>
                </div>
                <div class="description">
                    {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{ seller.supports[0].description }}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{ seller.supports.length }}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span><span
                class="bulletin-text">{{ seller.bulletin }}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%"/>
        </div>
        <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{ seller.name }}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from '../star/star';

    export default{
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                detailShow: false
            }
        },
        methods: {
            showDetail() {
                this.detailShow = true;
            }
        },
        created() {
            this.classMap= ['decrease','discount','special','invoice','guarantee']
        },
        components: {
            star
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl";

    .header
        position : relative
        color:white
        overflow : hidden
        background : rgba(7,17,27,0.5)
        .content-wrapper
            position : relative
            padding :48px 24px 32px 48px
            font-size: 0
            .avatar
                display : inline-block
                vertical-align : top
                .img
                    border-radius : 2px
            .content
                display : inline-block
                margin-left : 32px
                .title
                    margin 2px 0 16px 0
                    .brand
                        display : inline-block
                        vertical-align : top
                        width : 60px
                        height : 36px
                        bg-image('brand')
                        background-size: 60px 32px
                        background-repeat: no-repeat
                    .name
                        margin-left: 12px
                        font-size : 32px
                        line-height : 32px
                        font-weight : bold
                .description
                    margin-bottom: 20px
                    line-height : 24px
                    font-size: 24px
                .support
                    .icon
                        display : inline-block
                        width: 24px
                        height : 24px
                        margin-right 8px
                        background-size:24px 24px
                        background-repeat: no-repeat
                        &.decrease
                            bg-image('decrease_1')
                        &.discount
                            bg-image('discount_1')
                        &.guarantee
                            bg-image('guarantee_1')
                        &.invoice
                            bg-image('invoice_1')
                        &.special
                            bg-image('special_1')
                    .text
                        line-height : 24px
                        font-size: 20px
            .support-count
                position : absolute
                right : 24px
                bottom : 28px
                padding : 0 16px
                height : 48px
                line-height : 48px
                border-radius : 28px
                background : rgba(0,0,0,0.2)
                text-align : center
                .count
                    font-size :20px
                    vertical-align : top
                .icon-keyboard_arrow_right
                    margin-left : 4px
                    line-height : 48px
                    font-size : 20px
        .bulletin-wrapper
            position : relative
            height : 56px
            line-height : 56px
            padding : 0 44px 0 24px
            white-space : nowrap
            overflow : hidden
            text-overflow : ellipsis
            background : rgba(0,0,0,0.2)
            .bulletin-title
                display : inline-block
                vertical-align : top
                margin-top : 16px
                width : 44px
                height : 24px
                bg-image('bulletin')
                background-size : 44px 24px
                background-repeat: no-repeat
            .bulletin-text
                vertical-align : top
                margin : 0 8px 0 8px
                font-size : 28px
                font-weight: 200
            .icon-keyboard_arrow_right
                position : absolute
                font-size : 24px
                right : 24px
                top : 16px
        .background
            position : absolute
            left : 0
            top: 0
            width : 100%
            height : 100%
            z-index: -1
            filter : blur(10px)
        .detail
            position : fixed
            top : 0
            left : 0
            z-index : 100
            width : 100%
            height : 100%
            overflow : auto
            background : rgba(7,17,27,0.8)
            .detail-wrapper
                min-height : 100%
                width : 100%
                .detail-main
                    margin-top : 128px
                    padding-bottom : 128px
                    .name
                        line-height : 32px
                        text-align : center
                        font-size : 32px
                        font-weight : 700
                    .star-wrapper
                        margin-top : 32px
                        padding : 4px 0
                        text-align : center
            .detail-close
                position : relative
                width : 64px
                height : 64px
                margin : -128px auto 0 auto
                clear: both
                font-size : 64px

</style>