<template>
    <div>
        <detail-nav></detail-nav>
        <detail-swiper :topImages="topImages"></detail-swiper>
    </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'

import DetailSwiper from './childComps/DetailSwiper'


import { getProductDetailData } from '@/network/detail'

export default {
    name: 'Detail',
    components: {
        DetailNav,
        DetailSwiper
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