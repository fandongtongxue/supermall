<template>
    <swiper class="detail-swiper">
            <swiper-item v-for="item in topImages" class="detail-swiper-item">
                <img :src=item alt="">
            </swiper-item>
        </swiper>
</template>

<script>

import { Swiper, SwiperItem } from '@/components/common/swiper'
export default {
    name:'DetailSwiper',
    props: {
        topImages: []
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style>

.detail-swiper {
    height: 300px;
    overflow: hidden;
}
</style>