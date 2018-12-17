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
      <mu-drawer :open.sync="open" :docked="false">
        <mu-appbar color="primary" style="height:50px">
          <mu-button icon slot="left" @click="open=false">
            <mu-icon value="keyboard_arrow_left"></mu-icon>
          </mu-button>
          Menu
          <mu-button icon slot="right">
            <mu-icon value="menu"></mu-icon>
          </mu-button>
        </mu-appbar>
        <mu-list>
          <mu-sub-header avatar style="margin-top:5px">
            <mu-avatar>
              <img src="../assets/head.jpg">
            </mu-avatar>
          </mu-sub-header>
          <mu-list-item button>
            <mu-list-item-action>
              <mu-icon value="settings"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>
              Settings
            </mu-list-item-title>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button @click="logOut({cookie: cookie, callback: toLogin})">
            <mu-list-item-title>
              Log Out
            </mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="hot_tub"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </mu-drawer>

      <div class="body" style="margin-top: 70px; padding-left: 20px; padding-right: 20px">
        <h1>{{head}}</h1>
        <taskCard v-for="task in tasks" :key="task.name" v-bind="task"></taskCard>
      </div>

      <div class="footer" style="position: fixed; z-index: 10; left: 0; right: 0; bottom: 0;">
        <mu-bottom-nav :value.sync="shift" shift>
          <mu-bottom-nav-item title="Like" icon="favorite"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="Discovery" icon="schedule"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="Notification" icon="bookmark"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="Setting" icon="settings"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </div>
    </mu-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getToken } from '@/auth'
export default {
  name: 'UserInfo',
  data () {
    return {
      cookie: getToken(),
      shift: 'movies',
      open: false,
      head: 'The tasks are as bellow:',
      tasks: [
        {
          name: 'Chen JY',
          adr: 'Fudan University',
          tags: [
            {
              text: 'find dog',
              color: 'success'
            },
            {
              text: 'Shanghai',
              color: 'info'
            }
          ],
          info: '我于今日晚上六点十分左右在广州市天河区五山路，华晟大厦对面的天桥底与我家泰迪发发走丢了，它是公狗，没有穿衣服，毛发比较长，颜色均匀，走路的时候喜欢歪着走，体型不大，大概六斤左右，脖子上挂些绳圈但没有系绳子，希望有捡到或者看到过的朋友联系我一下，有酬谢！丢了爱犬很着急，多谢大家了，qq同微信号:309094783'
        }
      ]
    }
  },
  computed: {
    ...mapState('user', [
      'name', 'password'
    ])
  },
  methods: {
    ...mapActions('user', [
      'logOut'
    ]),
    toLogin () {
      this.$router.push({ path: '/' })
    }
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
