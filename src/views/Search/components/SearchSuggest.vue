<template>
  <div>搜索建议</div>
</template>

<script>
import { getSuggestList } from '@/api/search'
let timer = null
export default {
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  created () { },
  data () {
    return {
      list: []
    }
  },
  methods: {},
  computed: {},
  watch: {
    searchText: {
      handler (newVal) {
        // console.log(newVal)
        clearTimeout(timer)
        timer = setTimeout(async () => {
          // console.log(newVal)
          try {
            const res = await getSuggestList(newVal)
            console.log(res)
            this.list = res.data.data.options
          } catch (err) {
            console.log(err)
          }
        }, 900)
      },
      immediate: true// 立即监听，组件被创建的时候就会被监听一次
    }
  },
  beforeDestroy () {
    clearTimeout(timer)
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
