<template>
  <div class="menu">
    <el-aside width="200px">
      <!-- #545c64 -->
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#2578b5"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{ child.name }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      menus: [],
    };
  },
  created() {
    console.log(this.$router.options.routes);
    this.menus = [...this.$router.options.routes];
  },

  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.menu {
  .el-aside {
    height: 100%;
    .el-menu {
      // 滚动条y 消灭
      height: 100%;
      .fa {
        margin-right: 10px;
      }
    }
    .el-submenu .el-menu-item {
      // 滚动条x
      min-width: 0;
    }
  }
}
</style>