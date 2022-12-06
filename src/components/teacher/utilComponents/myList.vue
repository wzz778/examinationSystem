<template>
  <el-table :data="tableData" border style="width: 100%">
    <template v-for="typeObj in allType">
      <el-table-column
        :prop="typeObj.dateType"
        :label="typeObj.showName"
        :key="typeObj.name"
      >
      </el-table-column>
    </template>
    <el-table-column prop="date" label="操作">
      <template slot-scope="scope">
        <template v-for="tempObj in objFn">
          <el-button
            :type="tempObj.type"
            @click="tempObj.callFn(scope.row)"
            :key="tempObj.showInfo"
            plain
            >{{ tempObj.showInfo }}</el-button
          >
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn } from "element-ui";
export default {
  name: "myList",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  // 接收数据，数据类型,函数对象
  props: ["tableData", "allType", "objFn"],
};
</script>

<style scoped>
.el-button {
  padding: 10px;
}
</style>