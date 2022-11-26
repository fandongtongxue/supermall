<template>
    <div class="goods-list">
        <goods-list-item v-for="item in goods" :goodsItem="item" class="item" @click.native="itemClick(item)"></goods-list-item>
    </div>
</template>

<script>

import GoodsListItem from './GoodsListItem';

export default {
    name: 'GoodsList',
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItem
    },
    methods: {
        itemClick(item){
            this.$emit('itemClick', item)
        }
    }
}
</script>

<style>

.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }

</style>