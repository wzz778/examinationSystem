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
        <el-tree default-expand-all :data="data" node-key="id" :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span >{{ node.data.point}}</span> 
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
        <el-button type="primary" @click="submitForm('form')">创建父节点</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog style="z-index:2001;" title="知识点添加" append-to-body :visible.sync="dialogFormVisible">
      <el-form :model="addform">
        <el-form-item label="知识点名称" :label-width="formLabelWidth">
          <el-input v-model="addform.point" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addKnowledge()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {  Select, Option ,Tree} from "element-ui";
import {searchSubject,deleteKnowledgePoint,knowledgePointTree,addKnowledgePoint } from '@/myAxios/admin/wzzAxios'
export default {
  name: "SubjectEdit",
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [Tree.name]: Tree,
  },
  data() {
    return {
      dialogFormVisible:false,
      formLabelWidth: '120px',
      addform: {
        subjectId:"",
        grade:"",
        isParent:1,
        parentId:-1,
        point:""
      },
      labelPosition: "right",
      form: {
        levelName: "",
        subjectName: "",
      },
      subjectarr:[],
       data: [
      //   {
      //   id: 1,
      //   point: '一级 1',
      //   children: [{
      //     id: 4,
      //     point: '二级 1-1',
      //     children: [{
      //       id: 9,
      //       point: '三级 1-1-1'
      //     }, {
      //       id: 10,
      //       point: '三级 1-1-2'
      //     }]
      //   }]        
      // }, 
      ],
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
          this.dialogFormVisible=true;
          this.addform={
            subjectId:this.form.subjectName,
            grade:this.form.levelName,
            isParent:1,
            parentId:-1,
            point:""
          };
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
        this.dialogFormVisible=true;
        this.addform={
          subjectId:this.form.subjectName,
          grade:this.form.levelName,
          isParent:0, 
          parentId:data.id,
          point:""
        };
        // const newChild = { id: id++, point: 'testtest', children: [] };
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },
      remove(node, data) {
        console.log(node);
         console.log(data); 
                  this.$confirm('此操作将永久删除该知识点, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          return deleteKnowledgePoint({id:data.id});
        })
        .then((response) => {
          if(response.status==200){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            return knowledgePointTree({subjectId:this.form.subjectName,grade:this.form.levelName})
          }else{
            this.$message.error('删除失败');
          }
        })
        .then(data=>{
            this.data=data.data;
          })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      async KnowledgeTree(){
          this.data=[]
          let data= await knowledgePointTree({subjectId:this.form.subjectName,grade:this.form.levelName})
          if(data.status==200){ 
            this.data=data.data;
          }else if(data.msg=="无数据"){
            this.$message.info('无数据!');
          }else{
            this.$message.error('获取失败');
          }
      },
      async addKnowledge(){
        if(this.addform.point){
          this.dialogFormVisible = false;
          addKnowledgePoint(this.addform)
          .then(data=>{
            // console.log(data);
            if(data.status==200){
              this.$message.success('添加成功');
              return knowledgePointTree({subjectId:this.form.subjectName,grade:this.form.levelName})
            }else{
              this.$message.error('添加失败');
            }
          })
          .then(data=>{
            this.data=data.data;
          })
          .catch(err=>{
            console.log(err);
          })
          // if(data.status==200){
          //   this.$message.success('添加成功');
          //   this.KnowledgeTree()
          // }else{
          //   this.$message.error('添加失败');
          // }
        }else{
          this.$message.warning('请填写内容');
        }
      }
  },
  watch:{
    'form.levelName':{
        deep:true,
        async handler(newValue){
          this.form.subjectName=""
          this.data=[]
          let data= await searchSubject({beginIndex:1,size:20,level:newValue})
          if(data.status==200){
            this.subjectarr=data.data.records;
          }else{
            this.$message.error('获取失败');
          }
        }
    },
    "form.subjectName":{
        deep:true,
        async handler(){
          this.KnowledgeTree()
        }
    }
  },
  async mounted(){
    // let data= await knowledgePointTree({subjectId:1,grade:'一年级'})
    // if(data.status==200){
    //   this.data=data.data;
    // }else{
    //   this.$message.error('获取失败');
    // }
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