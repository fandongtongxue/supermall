<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll :probeType="3"
            :pullUpLoad="true"
            class="content"
            :data="[showGoodsList]"
            @pullingUp="loadMore"
            ref="scroll">
      <home-swiper ref="hSwiper" :banner="banner" @swiperLoaded="swiperLoaded"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="contentTab" class="tab-control" @click="tabClick"></tab-control>
      <goods-list :goods="showGoodsList"></goods-list>
    </scroll>
  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar';
import TabControl from '@/components/content/tabControl/TabControl';
import Scroll from '@/components/common/scroll/Scroll';

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
    GoodsList,
    Scroll
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop':{
          page: 1, list:[]
        },
        'new':{
          page: 1, list:[]
        },
        'sell':{
          page: 1, list:[]
        }
      },
      currentType: 'pop',
      tabOffsetTop: 0
    }
  },
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this._getMultiData()
    this._getProductData('pop')
    this._getProductData('new')
    this._getProductData('sell')
  },
  methods: {
    _getMultiData() {
      getMultiData().then( res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    _getProductData(type) {
      const page = this.goods[type].page
      getProductData(type, page).then( res => {
        const newList = res.data.list
        this.goods[type].list.push(...newList)
        this.goods[type].page += 1

        this.$refs.scroll.finishedPullUp()
      })
    },
    loadMore() {
      this._getProductData(this.currentType)
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
        default:
          break;
      }
    },
    swiperLoaded() {
		    this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
	  }
  }
}
</script>

<style scoped>
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

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
