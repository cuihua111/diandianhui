<template>
  <div class=Box>
    <div class="header-title">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户手机号码">
          <el-input placeholder="请输入用户手机号码"></el-input>
        </el-form-item>
        <el-form-item label="请选择时间">
          <div class="block">
            <el-date-picker
              v-model="dateDefault"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="会员状态">
          <el-select v-model="memDefaultValue.label" placeholder='请选择' clearable size="5px">
            <el-option label="全部" value="0"></el-option>
            <el-option label="正常" value="1"></el-option>
            <el-option label="冻结" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员升级状态">
          <el-select v-model="memLevelDefaultValue.label" label="" clearable size="8px">
            <el-option label="全部" value="0"></el-option>
            <el-option label="申请审核中" value="1"></el-option>
            <el-option label="申请通过" value="2"></el-option>
            <el-option label="驳回" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tableBox">
      <el-table
        :data="tableData"
        stripe
        :fit="true">
        <el-table-column width="60px" align="center" :show-overflow-tooltip="true" prop="userId"
                         label="序号"></el-table-column>
        <el-table-column width="120px" align="center" :show-overflow-tooltip="true" prop="mobilePhone"
                         label="会员账号"></el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true" prop="nickName" label="会员昵称"></el-table-column>
        <el-table-column width="120px" align="center" :show-overflow-tooltip="true" prop="mobilePhone"
                         label="会员手机号"></el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true" prop="userLevel" label="会员等级"></el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true" prop="是" label="是否商户"></el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true" prop="shopName" label="商家名称"></el-table-column>
        <el-table-column width="120px" align="center" :show-overflow-tooltip="true" prop="refereesNickName"
                         label="推荐人"></el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true" prop="refereesNum" label="推荐人数"></el-table-column>
        <el-table-column width="150px" align="center" :show-overflow-tooltip="true" prop="upStatus"
                         label="会员升级状态"></el-table-column>
        <el-table-column width="220px" align="center" :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">修改</el-button>
            <el-button type="warning" size="mini">冻结</el-button>
            <el-button type="success" size="mini">解冻</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="paginationBox">
      <pagination :pagiation="pagiation"></pagination>
    </div>
  </div>
</template>
<script>
  import {apiHost} from 'common/js/host.js'
  import pagination from 'components/pagination/pagination'

  export default {
    data () {
      return {
        dateDefault: [new Date(2018, 1, 1, 10, 10), new Date(2018, 1, 1, 20, 10)],
        formInline: {
          user: '',
          region: ''
        },
        memDefaultValue: {
          value: 0,
          label: '全部'
        },
        memLevelDefaultValue: {
          label: '全部'
        },
        tableData: [],
        pagiation: {},
        page: 1,
        pageSize: 10
      }
    },
    created () {
      this.getMemList()
    },
    methods: {
      onSubmit () {
        alert('dddd')
      },
      getMemList () {
        let self = this
        console.log(apiHost)
        this.$http.get(apiHost + '/web/user/getUsers/' + self.page + '/' + self.pageSize).then((res) => {
          console.log(res)
          this.tableData = res.data.objs
          this.pagiation = {
            totalSize: res.data.totalSize,
            pageSize: res.data.objs.length,
            pageSizes: [10, 20, 50, 100, 500],
            currentPage: 1,
            callback: this.getMemList
          }
        })
      }
    },
    components: {
      pagination
    }
  }
</script>
<style lang="scss" type=text/scss>
  .Box {
    height: 100%;
    /*background-color: hotpink;*/
    .header-title {
      /*background-color: skyblue;*/
    }
  }
</style>
