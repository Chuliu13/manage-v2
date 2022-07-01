<template>
  <div class="home">
    <el-header><Header /></el-header>
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <Bread />
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import Bread from "@/components/common/Breadcrumb.vue";
export default {
  name: "Home",
  components: {
    Header,
    Menu,
    Footer,
    Bread,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .el-header,
  .el-footer {
    padding: 0;
  }
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px;
    }
  }
}
</style>
