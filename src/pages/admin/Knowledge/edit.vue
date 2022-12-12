<template>
  <div id="adminindex">
    <el-form
      label-position="right"
      :rules="rules"
      label-width="100px"
      :model="form"
      ref="form"
    >
      <el-form-item label="名称" prop="levelName">
        <el-select v-model="form.levelName" placeholder="请选择活动区域">
          <el-option  v-for="p of $store.state.admin.allgrade" :key="p.index" :label="p" :value="p"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科" prop="subjectName">
        <el-select v-model="form.subjectName" placeholder="请选择活动区域">
          <el-option  v-for="p of subjectarr" :key="p.id" :label="p.subjectName" :value="p.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="知识点">
        <el-tree :data="data" node-key="id">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span style="padding-left:20px;">  
              <el-button
                type="text"
                size="mini"
                @click="() => append(data)">
                  添加
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)">
                  删除
              </el-button>
            </span>
          </span>
        </el-tree>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {  Select, Option ,Tree} from "element-ui";
import {searchSubject} from '@/myAxios/admin/wzzAxios'
  let id = 1000;
export default {
  name: "SubjectEdit",
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [Tree.name]: Tree,
  },
  data() {
    return {
      labelPosition: "right",
      form: {
        levelName: "",
        subjectName: "",
      },
      subjectarr:[],
       data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      rules: {
        levelName: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        subjectName: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
      handleNodeClick(data) {
        console.log(data);
      },
    onSubmit() {
      console.log("submit!");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
  },
  watch:{
    'form.levelName':{
        deep:true,
        async handler(){
          this.form.subjectName=""
          let data= await searchSubject({beginIndex:1,size:10,level:this.form.levelName})
          console.log(data);
          if(data.status==200){
            this.subjectarr=data.data.records;
          }else{
            this.$message.error('获取失败');
          }
        }
    }
  }
};
</script>
<style lang="less" scoped>
#adminindex {
  width: 100%;
  min-height: 500px;
  // background-color:#3BCA55;
}
</style>