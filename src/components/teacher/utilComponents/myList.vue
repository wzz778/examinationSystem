<template>
  <el-table :data="tableData" border style="width: 100%">
    <template v-if="hasSelection">
      <el-table-column type="selection"></el-table-column>
    </template>
    <template v-for="typeObj in allType">
      <el-table-column
        :prop="typeObj.dateType"
        :label="typeObj.showName"
        :key="typeObj.name"
      >
      </el-table-column>
    </template>
    <el-table-column v-if="statueObj" label="状态" width="100px">
      <el-tag :type="statueObj.type">{{ statueObj.showName }}</el-tag>
    </el-table-column>
    <el-table-column
      prop="date"
      label="操作"
      v-if="objFn"
      :width="objFn.length == 4 ? 300 : 200"
    >
      <template slot-scope="scope">
        <template v-for="tempObj in objFn">
          <el-button
            class="btnSty"
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
import { Tag } from "element-ui";
export default {
  name: "myList",
  components: {
    [Tag.name]: Tag,
  },
  // 接收数据，数据类型,函数对象
  props: ["tableData", "allType", "objFn", "hasSelection", "statueObj"],
};
</script>

<style scoped>
.el-button {
  padding: 10px;
}
</style>