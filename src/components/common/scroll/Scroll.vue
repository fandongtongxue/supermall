<template>
    <div class="wrapper" ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    props:{
        probeType: {
            type: Number,
            default: 0
        },
        click: {
            type: Boolean,
            default: true
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default() {
                return []
            }
        },
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        setTimeout(this._initScroll(),200)
    },
    methods: {
        _initScroll() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click,
                pullUpLoad: this.pullUpLoad
            })

            if (this.probeType == 2 || this.probeType == 3) {
                this.scroll.on('scroll', position => {
                    this.$emit('scroll', position)
                })
            }
            if (this.pullUpLoad) {
                this.scroll.on('pullingUp', () => {
                    this.$emit('pullingUp')
                })
            }
        },
        finishedPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll.refresh()
        },
        scrollTo(x, y, time=200) {
            this.scroll.scrollTo(x, y, time)
        }
    },
}
</script>

<style scoped>

.wrapper {
    overflow: hidden;
}
</style>