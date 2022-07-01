<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @cancel="$router.go(-1)"
        @search="isSearch = true"
        autofocus
        @focus="isSearch = false"
      />
    </form>
    <SearchHistory v-if="searchText === ''"></SearchHistory>
    <template v-else>
      <SearcResult v-if="isSearch"></SearcResult>
      <SearchSuggest v-else :searchText="searchText"></SearchSuggest>
    </template>
  </div>
</template>

<script>
import SearchHistory from './components/SearchHistory.vue'
import SearcResult from './components/SearcResult.vue'
import SearchSuggest from './components/SearchSuggest.vue'
export default {
  created () { },
  data () {
    return {
      searchText: '',
      isSearch: false // 默认没有回车
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {
    SearchHistory,
    SearcResult,
    SearchSuggest
  }
}
</script>

<style scoped lang='less'>
</style>
