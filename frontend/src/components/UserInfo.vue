<template>
  <div style="height: 100%; width: 100%; position: 100%; top: 0;">
    <mu-container style="margin-top-40">
<div class="header" style="position: fixed; z-index: 10; left: 0; right: 0; top: 0;">
    <mu-appbar style="width: 100%;" color="primary">

  <mu-button icon slot="left" @click="open = !open">
    <mu-icon value="menu"></mu-icon>
  </mu-button >
  Sicilia
    <mu-button flat slot="right">
           <mu-icon value="search"></mu-icon>
      </mu-button>
</mu-appbar>

</div>

<div style="margin-top: 70px; padding-left: 20px; padding-right: 20px">
        <mu-card style="width: 100%; max-width: 375px; margin: 0 auto; margin-top: 20px">
          <mu-flex class="flex-wrapper" justify-content="start">
            <mu-card-header title="Chen JY" sub-title="Fudan University">
              <mu-avatar slot="avatar">
                <img src="../assets/head.jpg">
              </mu-avatar>
            </mu-card-header>
          </mu-flex>
          <mu-flex class="flex-wrapper" justify-content="start" style="margin-left: 15px">
            <mu-chip color="info" class="tag">find dog</mu-chip>
            <mu-chip color="success" class="tag">Shanghai</mu-chip>
          </mu-flex>
          <div class="text ellipsis" style="margin-left: 10px; margin-right: 10px">
            <mu-card-text class="text-concat">
              我于今日晚上六点十分左右在广州市天河区五山路，华晟大厦对面的天桥底与我家泰迪发发走丢了，它是公狗，没有穿衣服，毛发比较长，颜色均匀，走路的时候喜欢歪着走，体型不大，大概六斤左右，脖子上挂些绳圈但没有系绳子，希望有捡到或者看到过的朋友联系我一下，有酬谢！丢了爱犬很着急，多谢大家了，qq同微信号:309094783
            </mu-card-text>
          </div>

          <mu-card-actions>
            <mu-flex class="flex-wrapper" justify-content="end">
              <mu-button flat>
                More
                <mu-icon value="keyboard_arrow_right"></mu-icon>
              </mu-button>
            </mu-flex>
          </mu-card-actions>
        </mu-card>
      </div>

<div class="footer" style="position: fixed; z-index: 10; left: 0; right: 0; bottom: 0;">
  <mu-bottom-nav :value.sync="shift" shift>
    <mu-bottom-nav-item title="Like"  icon="favorite"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Discovery"  icon="schedule"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Notification"  icon="bookmark"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Setting"  icon="settings"></mu-bottom-nav-item>
  </mu-bottom-nav>
  </div>
</mu-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getToken } from '@/auth'

export default {
  name: 'UserInfo',
  data () {
    return {
      cookie: getToken(),
      shift: 'movies',
      open: false
    }
  },
  computed: {
    ...mapState('user', [
      'name', 'password'
    ])
  }
}
</script>

<style scoped>
.xy-center{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.margin-top-40{
  margin-top: 40px;
}
.text {
  position: relative;
  font-size: 14px;
  color: black;
}

.text-concat {
  position: relative;
  display: inline-block;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 6em;
  line-height: 1.2em;
  text-align:justify;
}

.tag{
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
}

</style>
