<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-menu-item index="1">
          <i class="fa fa-users"></i>
          <router-link to="memberManagement">会员管理</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="fa fa-shopping-basket"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">自营商品管理</el-menu-item>
            <el-menu-item index="2-2">地面商品管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="fa fa-file"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <h1>点点汇后台管理系统</h1>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
       <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>

</script>
<style lang="scss" scoped="" type="text/scss">
  .el-container {
    height: 100% !important;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #878d99;
    line-height: 60px;
    h1 {
      font-size: 22px;
      float: left;
      font-weight: 700;
    }
  }

  .el-aside {
    color: #333;
  }
</style>
