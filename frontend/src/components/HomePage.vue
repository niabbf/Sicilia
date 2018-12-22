<template>
  <div style="height: 100%; width: 100%; position: 100%; top: 0;">
    <mu-container>
      <div class="header" style="position: fixed; z-index: 10; left: 0; right: 0; top: 0;">
        <mu-appbar style="width: 100%;" color="primary">
          <mu-button icon slot="left" @click="open = !open">
            <mu-icon value="menu"></mu-icon>
          </mu-button >
          Sicilia
          <mu-button flat slot="right" @click="toShowTools">
            <mu-icon value="more_vert"></mu-icon>
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
          <mu-list-item button @click="() => { shift='user'; open=false }">
            <mu-list-item-action>
              <mu-icon value="account_box"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>
              User
            </mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="() => { shift='task'; open=false }">
            <mu-list-item-action>
              <mu-icon value="storage"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>
              Task
            </mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="() => { shift='setting'; open=false }">
            <mu-list-item-action>
              <mu-icon value="settings"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>
              Setting
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

      <div style="height: 60px">
        <mu-button fab small color="info" id="add-btn" class="tool-button">
          <mu-icon value="add"></mu-icon>
        </mu-button>
        <mu-button fab small color="info" id="search-btn" class="tool-button">
          <mu-icon value="search"></mu-icon>
        </mu-button>
        <mu-button fab small color="success" id="filter-city-btn" class="tool-button">
          <mu-icon value="location_on"></mu-icon>
        </mu-button>
        <mu-button fab small color="pink" id="filter-time-btn" class="tool-button">
          <mu-icon value="timer"></mu-icon>
        </mu-button>
      </div>
      <!-- <div class="body" style="padding-left: 5px; padding-right: 5px"></div> -->
      <div class="center" v-if="shift === 'task'">
        <taskCard v-for="task in tasks" v-if="task.status===0" :key="task.name" v-bind="task"></taskCard>
      </div>

      <div class="center" v-if="shift === 'user'">
        <userInfo></userInfo>
      </div>

      <div class="center" v-if="shift === 'notification'">
      </div>

      <div class="center" v-if="shift === 'setting'">
      </div>

      <div class="footer" style="position: fixed; z-index: 10; left: 0; right: 0; bottom: 0;">
        <mu-bottom-nav :value.sync="shift" shift>
          <mu-bottom-nav-item value="user" title="User" icon="account_box"></mu-bottom-nav-item>
          <mu-bottom-nav-item value="task" title="Task" icon="storage"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="Notification" icon="bookmark"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="Setting" icon="settings"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </div>
    </mu-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { getToken } from '@/auth'
import anime from 'animejs'

export default {
  name: 'HomePage',
  data () {
    return {
      cookie: getToken(),
      shift: 'task',
      open: false,
      showTools: false,
      tasks: null
    }
  },
  mounted: function () {
    this.tasks = this.getTasks
  },
  computed: {
    ...mapState('user', [
      'name', 'password'
    ]),
    ...mapGetters('user', [
      'getTasks'
    ])
  },
  methods: {
    ...mapActions('user', [
      'logOut'
    ]),
    toLogin () {
      this.$router.push({ path: '/' })
    },
    toShowTools () {
      this.showTools = !this.showTools
      if (this.showTools) {
        anime({targets: '#add-btn', translateY: 260})
        anime({targets: '#search-btn', translateY: 200})
        anime({targets: '#filter-city-btn', translateY: 140})
        anime({targets: '#filter-time-btn', translateY: 80})
      } else {
        anime({targets: '#add-btn', translateY: -260})
        anime({targets: '#search-btn', translateY: -200})
        anime({targets: '#filter-city-btn', translateY: -140})
        anime({targets: '#filter-time-btn', translateY: -80})
      }
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
.center{
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 60px;
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
.tag {
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
.tool-button {
  position: absolute;
  top: 0;
  right: 12px;
  z-index: 5;
}
</style>
