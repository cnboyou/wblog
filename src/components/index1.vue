<template>
    <div>
      <el-container>
        <el-header style="background: rgba(105,105,105,0)">
          <el-row>
            <el-col :span="6"><div class="grid-content bg-purple">汪仔码头的博客</div></el-col>
            <el-col :span="18"><div class="grid-content bg-purple-light">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">我的工作台</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3">消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
              </el-menu>
              <div class="line"></div>
            </div></el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside width="200px" style="background: #0a0d69">Aside</el-aside>
          <el-main style="background: #426925">Main</el-main>
        </el-container>
        <el-footer style="background: #69141c">Footer</el-footer>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
