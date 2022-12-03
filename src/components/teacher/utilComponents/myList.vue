<template>
  <el-table :data="tableData" border style="width: 100%">
    <template v-for="typeName in allType">
      <el-table-column
        :prop="typeName.type"
        :label="typeName.name"
        :key="typeName.name"
      >
      </el-table-column>
    </template>
    <el-table-column prop="date" label="操作">
      <template slot-scope="scope">
        <template v-for="tempObj in objFn">
          <el-button
            :type="tempObj.type"
            @click="tempObj.fn(scope.row.id)"
            :key="tempObj.name"
            plain
            >{{ tempObj.name }}</el-button
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

<style>
</style>