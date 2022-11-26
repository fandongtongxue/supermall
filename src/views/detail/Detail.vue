<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-bottom-bar></detail-bottom-bar>
    </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'

import DetailSwiper from './childComps/DetailSwiper'

import DetailBottomBar from './childComps/DetailBottomBar'


import { getProductDetailData } from '@/network/detail'

export default {
    name: 'Detail',
    components: {
        DetailNav,
        DetailSwiper,
        DetailBottomBar
    },
    data() {
        return {
            iid: '',
            topImages: []
        }
    },
    created() {
        this.iid = this.$route.query.iid

        getProductDetailData(this.iid).then(res => {
            this.topImages = res.result.itemInfo.topImages
        })
    },

}
</script>

<style scoped>

</style>