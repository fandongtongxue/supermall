<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper ref="hSwiper" :banner="banner" @swiperLoaded="swiperLoaded"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control></tab-control>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar';
import TabControl from '@/components/content/tabControl/TabControl';

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import GoodsList from '@/components/content/goods/GoodsList';


import { getMultiData, getProductData } from '@/network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: []
    }
  },
  created() {
    this._getMultiData()
    this._getProductData()
  },
  methods: {
    _getMultiData() {
      getMultiData().then( res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    _getProductData() {
      getProductData().then( res => {
        this.goods = res.data.list
      })
    }
  }
}
</script>

<style>
#home {
    height: 100vh;
    position: relative;
  }
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }
</style>
