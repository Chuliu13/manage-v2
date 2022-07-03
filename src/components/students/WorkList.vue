<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getTableData } from '@/utils/table'
export default {
  data() {
    return {
        tableData: []
        // {
        //     id:'',            
        //     userId:'',
        //     title:'',
        //     completed:''
        // }
    }
  },
  created(){
    getTableData(this, '/works',{} ,['completed'])
  }
};
</script>
