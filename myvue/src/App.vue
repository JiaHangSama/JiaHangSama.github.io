<template>
    <div id="app">
        <myheader :seller="seller"></myheader>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="./goods" class="tab-a">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="./ratings" class="tab-a">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="./seller" class="tab-a">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import myheader from "./components/header/header.vue";
    import Data from './api/getData';

    const REE_OK = 0;

    export default {
        data() {
            return {
                seller: {}
            }
        },
        created() {
            Data.getData(seller => {
                this.seller = seller.seller;
                console.log(this.seller);
            });
        },
        name: 'app',
        components:{
            myheader
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "common/stylus/mixin.styl"

    #app .tab{
        display: flex;
        width: 100%;
        height: 80px;
        line-height: 80px;
        border-1px:rgba(7,17,27,0.1)
    }

    #app .tab .tab-item{
        flex: 1;
        text-align: center;
    }

    #app .tab .tab-item .tab-a{
        display: block;
        text-decoration: none;
        font-size: 28px;
        color:rgb(77,85,93);
    }

    #app .tab .tab-item .router-link-active{
        color:rgb(240,20,20);
    }
</style>
