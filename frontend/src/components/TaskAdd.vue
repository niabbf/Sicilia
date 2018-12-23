<template>
<div style="height: 100% width: 100%">
    <mu-container>
    <div class="header" style="position: fixed z-index: 10 left: 0 right: 0 top: 0">
        <mu-appbar style="width: 100%" color="primary">
          <mu-button icon slot="left" @click="toHomePage">
            <mu-icon value="close"></mu-icon>
          </mu-button >
          Sicilia
          <mu-button flat slot="right" @click="toAdd">
            <mu-icon value="check"></mu-icon>
          </mu-button>
        </mu-appbar>
      </div>
    <div class="xy-center">
       <mu-form ref="form" :model="validateForm" class="mu-form" enctype="multipart/form-data">
        <mu-form-item prop="taskname" :rules="taskRules">
          <mu-text-field v-model="validateForm.taskname" prop="taskname" placeholder="来个标题"></mu-text-field>
        </mu-form-item>

        <mu-form-item prop="taskdscrpt" >
          <mu-text-field v-model="validateForm.taskdscrpt" prop="taskdscrpt" placeholder="说出你的故事" multi-line :rows="6" :max-length="200"></mu-text-field>
        </mu-form-item>
        <mu-row>
        <mu-form-item prop="timeexpired" icon="today" >
           <mu-date-input  v-model="validateForm.timeexpired" label-float full-width no-display></mu-date-input>
        </mu-form-item>
        <mu-form-item prop="money" icon="attach_money">
           <mu-text-field v-model="validateForm.money" ></mu-text-field>
        </mu-form-item>
        </mu-row>
         <mu-form-item prop="tags" icon="notes">
        <mu-select  v-model="validateForm.tags" chips multiple tags>
        <mu-option v-for="(tag, index) in pretags" :key="index" :label="tag" :value="tag"></mu-option>
            </mu-select>
        </mu-form-item>
        <div class="upload_img">
                  <div v-show="images.length < maxCount" >
                    <input @change="change" class="upload-box" id="uploaderInput"  type="file"
                           accept="image/*">
                <mu-dialog title="Fail" width="360" :open.sync="showDialog">
                {{dialogText}}
                        <mu-button slot="actions" flat color="primary" @click="showDialog=false">Close</mu-button>
                    </mu-dialog>
                  </div>
         <div class="upload-display" id="uploaderFiles">
            <mu-flex class="flex-wrapper" justify-content="start">
              <div ref="files" class="v" v-for="(image,index) in images" :key="index"
                        :style="'backgroundImage:url(' + image +' ); background-size: 100px 100px; background-repeat: no-repeat;'" align-content="start"><span @click="deleteimg(index)" class="x">&times;</span></div>
            </mu-flex>
         </div>
        </div>
       </mu-form>
    </div>
    </mu-container>
</div>
</template>

<script>
import { mapState } from 'vuex'
import {upload} from '@/api/upload'
export default {
  name: 'TaskAdd',
  props: {
    taskname: String,
    timeexpired: String,
    tags: Array,
    taskdscrpt: String
  },
  data () {
    return {
      showDialog: false,
      dialogText: '',
      maxCount: 8,
      filesArr: [],
      images: [],
      pretags: ['nm', 'cjy'],
      taskRules: [
        { validate: (val) => !!val, message: 'Task name is a must' }
      ],
      validateForm: {
        taskname: '',
        taskdscrpt: '',
        timeexpired: '',
        money: 0,
        tags: []
      }
    }
  },
  computed: {
    ...mapState('user', [
      'name', 'password'
    ])
  },
  methods: {
    toHomePage: function () {
      this.$router.push({ path: '/homepage' })
    },
    toAdd: function () {
      this.$refs.form.validate().then((result) => {
        if (result === true) {
          this.put({taskname: this.validateForm.taskname, dscrpt: this.validateForm.taskdscrpt, tgs: this.validateForm.tags, t: this.validateForm.timeexpired, m: this.validateForm.money})
        }
      })
    },
    deleteimg (index) {
      this.filesArr.splice(index, 1)
      this.images.splice(index, 1)
    },
    change (e) {
      let files = e.target.files
      if (files.length === 0) {
        return
      }
      if (this.images.length + files.length > this.maxCount) {
        this.dialogText = '最多只能上传' + this.maxCount + '张图片！'
        this.showDialog = true
        return
      }
      let reader
      let file
      let images = this.images
      for (let i = 0; i < files.length; i++) {
        file = files[i]
        this.filesArr.push(file)
        reader = new FileReader()
        reader.onload = (e) => {
          let img = new Image()
          img.onload = function () {
            let canvas = document.createElement('canvas')
            let ctx = canvas.getContext('2d')
            let w = img.width
            let h = img.height
            canvas.width = w
            canvas.height = h
            ctx.drawImage(img, 0, 0, w, h)
            let base64 = canvas.toDataURL('image/png')
            images.push(base64)
          }
          img.src = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    put (taskname, dscrpt, tgs, t, m) {
      let param = new FormData()
      param.append('taskname', taskname)
      param.append('tags', tgs)
      param.append('description', dscrpt)
      param.append('username', this.name)
      param.append('time', t)
      param.append('money', m)
      this.filesArr.forEach((file) => {
        param.append('image_file', file)
      })
      console.log(param)
      upload(param).then(function (result) {
        console.log(result.data)
        this.$router.push({ path: '/homepage' })
      })
    }
  }
}
</script>

<style scoped>
.xy-center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.card {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  margin-top: 10px;
}
.time-start {
  font-family: Microsoft Yahei;
  font-size: 13px;
  color: black;
  padding-right: 3px
}
.time-connector {
  font-family: Microsoft Yahei;
  font-size: 13px;
  color: black;
  padding-left: 0;
  padding-right: 0
}
.time-end {
  font-family: Microsoft Yahei;
  font-size: 13px;
  color: red;
  padding-left: 3px
}
.text {
  position: relative;
  font-family: Microsoft Yahei;
  font-size: 14px;
  color: black
}
.text-concat {
  position: relative;
  display: inline-block;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 6em;
  line-height: 1.2em;
  text-align:justify
}
.subtitle {
  font-size: 20px;
  text-align:justify
}
.detail {
  text-align:justify;
  padding-top: 0;
  padding-bottom: 0
}
.tag{
  height: 20px;
  margin-left: 5px;
  margin-right: 5px
}
.card-action {
  padding-bottom: 15px
}
.upload-display {
  position: relative;
  margin-top: 6px;
  text-align: center;
}
.v {
  background-color: black;
  font-size: 20px;
  line-height: 23px;
  color: white;
  right: -0.3rem;
  top: -0.3rem;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.8;
}
.upload-box {
      margin-top: 6px;
    }
    .p-tip {
      margin: 20px 0 10px 0;
      .p-tipimg {
        width: 100%;
        padding-bottom: 20px;
      }
      .text {
        color: grey;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
      }
    }
</style>
