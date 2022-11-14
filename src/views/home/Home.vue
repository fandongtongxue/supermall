<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper ref="hSwiper" :banners="banners" @swiperLoaded="swiperLoaded"></home-swiper>
    <feature-view></feature-view>
  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar';

import HomeSwiper from './childComps/HomeSwiper';
import FeatureView from './childComps/FeatureView';

import { getMultiData } from '@/network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    FeatureView
  },
  data() {
    return {
      banners: []
    }
  },
  created() {
    this._getMultiData()
  },
  methods: {
    _getMultiData() {
      getMultiData().then( res => {
        this.banners = res.data.banner.list
      })
    }
  }
}
</script>

<style>
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }
</style>
