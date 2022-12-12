<template>
  <div id="adminindex">
    <el-form
      label-position="right"
      :rules="rules"
      label-width="100px"
      :model="form"
      ref="form"
    >
      <el-form-item label="学科名称" prop="subjectName">
        <el-input v-model="form.subjectName"></el-input>
      </el-form-item>
      <el-form-item label="年级" prop="levelName">
        <el-select v-model="form.levelName" placeholder="请选择你要添加学科的年级">
          <el-option  v-for="p of $store.state.admin.allgrade" :key="p.index" :label="p" :value="p"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>  
        <el-button type="primary" @click="submitForm('form')"
          >立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Input, Select, Option } from "element-ui";
import {addSubject,updateSubject} from '@/myAxios/admin/wzzAxios'
export default {
  name: "SubjectEdit",
  components: {
    [Input.name]: Input,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      labelPosition: "right",
      form: {
        id:'',
        subjectName: '',
        levelName: '',
        level:1,
        deleted: false
      },
      rules: {
        subjectName: [
          { required: true, message: "请输入学科名称", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" },
        ],
        levelName: [
          { required: true, message: "请选择学科区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");

    },
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid)  {
              if(this.form.id){
                let data= await updateSubject(this.form)
                if(data.status==200){
                  this.$message({
                    message: '修改成功！',
                    type: 'success'
                  });
                  this.$refs[formName].resetFields();
                }else{
                  this.$message.error('修改失败');
                }
              }else{
                let data= await addSubject(this.form)
                if(data.status==200){
                  this.$message({
                    message: '添加成功！',
                    type: 'success'
                  });
                  this.$refs[formName].resetFields();
                }else{
                  this.$message.error('添加失败');
                }
              }
        } else {
          this.$message({
            message: '您的填写有误！',
            type: 'warning'
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted(){
    if(sessionStorage.getItem("formmessage")){
      let formdata=JSON.parse(sessionStorage.getItem("formmessage"))
      this.form=formdata;
      sessionStorage.removeItem("formmessage")
    }
  },
  watch:{
    'form.levelName':{
        deep:true,
        handler(){
          let allgrade=this.$store.state.admin.allgrade
          for(let i in allgrade){
            if(allgrade[i]==this.form.levelName){
              this.form.level=parseInt(i)+1;
            }
          }
          console.log(this.form.level);
        }
    }
  }
};
</script>
<style lang="less" scoped>
#adminindex {
  width: 100%;
  min-height: 500px;
  padding:20px 10px;
  background-color: #f8f8f8;
}
</style>