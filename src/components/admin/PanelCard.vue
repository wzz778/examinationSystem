<template>
	<div class="panelcard" @mousemove="enterpanel()" @mouseout="outpanel()">
        <div class="panelcardleft">
            <div class="ibox" :style="istyle">
                <i :class="icon"></i>
            </div>
        </div>
        <div class="panelcardright">
            <div>
                <div>{{title}}</div>
                <div>{{number}}</div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name:'PanelCard',
		data() {
			return {
                istyle:{
                    color:this.color,
                    backgroundColor:"white",
                    fontSize: "40px"
                }   
			}
		},
        methods:{
            enterpanel(){
                this.istyle={
                    color:"white",
                    backgroundColor:this.color,
                    fontSize: "45px"
                }
            },
            outpanel(){
                this.istyle={
                    color:this.color,
                    backgroundColor:"white",
                    fontSize: "40px"
                }
            },
        },
		props:{
			icon:{
				type:String, //name的类型是字符串
                default:"el-icon-s-custom", //默认值,
			},
			number:{
				type:Number,
                required:true
			},
			title:{
				type:String,
				required:true
			},
            color:{
				type:String,
				default:"#36a3f7", //默认值,
			}
		}
	}
</script>
<style lang="less" scoped>
    .panelcard{
        min-width: 240px;
        height: 120px;
        background-color: white;
        box-shadow: 4px 4px 40px rgb(0 0 0 / 10%);
        border-radius:5px ;
        display: flex;
        margin: 10px;
        justify-content:space-between;
        cursor: pointer;
        .panelcardleft{
            width: 120px;
            height: 120px;
            padding:10px;
            .ibox{
                width: 100px;
                height: 100px;
                text-align: center;
                line-height: 100px;
                 border-radius:5px ;
                  transition: .5s all;
            }
        }
        .panelcardright{
            width: 120px;
            height: 120px;
            padding:10px;
            div{
                width: 100px;
                height: 100px;
                text-align: center;
                line-height: 50px;
                div{
                    width: 100px;
                    height: 50px;
                }
                div:first-child{
                    width: 100px;
                    height: 50px;
                    color: rgba(0,0,0,.45);
                    font-weight: 600;
                }
                div:nth-child(2){
                    color: rgba(0,0,0,.7);
                    font-weight: 700;
                    font-size: 22px;
                }
            }
        }
        &:hover{
            i{
                color: aliceblue;
            }
        }
    }
</style>