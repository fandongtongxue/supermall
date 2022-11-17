<template>
    <div class="goods-item">
        <img :src="goodsItem.show.img" alt="">
        <span>{{goodsItem.title}}</span>
    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
                type: Object,
                default() {
                    return {}
                }
            }
    }
}
</script>

<style>
.goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
</style>