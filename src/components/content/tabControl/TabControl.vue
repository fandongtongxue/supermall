<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item, index) in titles" @click="itemClick(index)" :class="{active:currentIndex==index}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TabControl',
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return ['流行','新款','精选']
            }
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('tabClick', index)
        }
    }
}


</script>

<style>

.tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab-control-item.active span {
    border-bottom: 2px solid var(--color-high-text);
  }

</style>