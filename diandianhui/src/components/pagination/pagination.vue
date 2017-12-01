<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pagiation.pageSizes"
      :page-size="pagiation.pageSize"
      layout="total, slot, sizes, prev, pager, next, jumper"
      :total="pagiation.totalSize">
      <span>第{{currentPage}} / {{pagiation.totalSize}}页</span>
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentPage: 0
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val, callback) {
        console.log(`当前页: ${val}`)
        this.currentPage = val
        callback('pagiation'.callback)
      }
    },
    props: [
      'pagiation'
    ]
  }
</script>
<style lang="scss" type=text/scss>

</style>
