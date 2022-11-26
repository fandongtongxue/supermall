<template>
    <div class="bottom-bar">
        <div class="cart" @click="addCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
</template>


<script>

export default {
    name: 'DetailBottomBar',
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    },
}

</script>


<style scoped>
.bottom-bar{
    display: flex;
    height: 49px;
    text-align: center;
    font-size: 15px;
    color: #fff;
}
.cart{
    flex: 1;
    background-color: red;
}

.buy{
    flex: 1;
    background-color: yellow;
}

</style>