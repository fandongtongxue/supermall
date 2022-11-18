<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="@/assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="items">
                <span v-for="(item, index) in titles" class="item" :class="{active:currentIndex == index}" @click="itemClick(index)">{{item}}</span>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';

export default {
    name: 'DetailNav',
    data() {
        return {
            titles: ['商品','详情','评价','推荐'],
            currentIndex: 0
        }
    },
    components:{
        NavBar
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.back {
    margin-top: 5px;
}
    .items{
        display: flex;
    }
    .item {
        flex: 1;
    }
    .active{
        color: var(--color-tint);
    }
</style>