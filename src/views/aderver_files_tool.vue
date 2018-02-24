<template>
  <div id="tab-2" class="tab-pane active">
      <div class="panel-body">
          <div class="bg-muted p-xs b-r-sm" style="background-color: #f3f6fb;"> 
            <h3 data-i18n="zizhi.g5"></h3>
            <p data-i18n="zizhi.g6"></p>
            <p data-i18n="zizhi.g7"></p>
          </div>
          
          <div class="ibox">
              <h3 class="ibox-title" data-i18n="zizhi.g4">广告主资质文件</h3>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-lg-3" v-for="(ele,index) in items">
                    <div class="contact-box center-version">
                      <el-upload
                        class="avatar-uploader"
                        :action="upload_action"
                        :data="upload_data"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess" :id="ele.id" :index="index"
                        :before-upload="beforeAvatarUpload">
                        <!-- <a :href="ele.imageUrl" target="_blank" v-if="ele.imageUrl"> -->
                          <img :src="ele.imageUrl" v-if="ele.imageUrl" class="avatar">
                        <!-- </a> -->
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                      <div class="contact-box-footer">
                        <a :href="ele.imageUrl" target="_blank" class="btn btn-primary" data-i18n="zizhi.g8">预览</a>
                        <button class="btn btn-danger" @click='delfilebtn(1,index,ele.id)' data-i18n="zizhi.g3">删除</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <button class="btn btn-primary martop" @click='addfilebtn(2)' data-i18n="zizhi.g1">增加资质</button>
      </div>
  </div>
</template>

<script>
import { getFileList, delFile, addFile, baseurl, adList } from '../api/api'
import util from '../common/js/util'

export default {
    data() {
      return {
        upload_action: `${baseurl}/qualifyfile/upload`,
        cur_index: '',
        upload_data:{
          type: 'qualifyfile',
          custid:util.getCustID()
        },
        items: []
      };
       //this.getFileList();
    },
    mounted() {
      util.setLanguage();
      this.getList();
      var that = this;
      document.onchange = function(e){
          var ele = $(e.target);
          that.cur_index = ele.closest('.avatar-uploader').attr('index');
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        var that = this;
        if(res.code == 200){
           var index = parseInt(this.cur_index);
           //let url = `${baseurl}/${res.url}`;
           this.items.splice(index,1,{id:res.id,type:2,imageUrl: res.url});

        }
      },
      addfilebtn(type, index){
        this.items.push({type:2});
      },
      delfilebtn(type, index,id){
        let para = {
            id: id,
        };
        delFile(para).then((res) => {
          if(res.status == 200){
            this.$message.error('删除成功');
            this.items.splice(index,1);
          }
        });
      },
      beforeAvatarUpload(file,s) {
  
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';

        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          this.$message.error('上传图片只能是 JPG PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M;
//          return isLt2M;
      },
      filteritem(type){
          var r = [];
          var arr = this.items;
          for (var i = 0; i < arr.length; i++) {
            if (arr[i]['type'] == 'qualifyfile') {
                r.push(tmp);
            }
          }
          return r.length;
      },
      getList() {
        let id = this.upload_data.custid;
        let para = {
            custid: id
        };
        getFileList(para).then((res) => {
          
          var arr = [];
          let arrdata = res.data.filelist;
          for (var i = 0; i < arrdata.length; i++) {
            if (arrdata[i]['file_type'] == 'qualifyfile') {
                var url = `${arrdata[i].file_url}`;
                var tmp = {id: arrdata[i].id,type:arrdata[i].file_type,imageUrl: url};
                arr.push(tmp);
            }
          }
          this.items = arr;
        });
      }
    }
  }
</script>

<style>
.center-version .avatar-uploader {
  text-align: center;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 22px auto 15px;
  }
  button.martop{
      margin-top:10px;
  }
  .avatar-uploader input[name='file']{
    display: none !important;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .tabs-container{
    padding-bottom:30px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>