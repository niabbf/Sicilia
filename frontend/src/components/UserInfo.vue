<template>
  <mu-container style="padding:0">
    <div style="font-size:20px;text-align:left">
      <pre><span style="font-weight:bold">User:</span>    niabbf</pre>
      <pre><span style="font-weight:bold">Money:</span>   $1,000,000</pre>
    </div>
    <mu-paper color="grey400" full-width style="z-index:0;margin-top:10px;margin-bottom:60px">
      <div style="background-color: #eee; padding:10px 0">
        <mu-row>
          <mu-col span="4">
            <mu-switch v-model="notDone" open="true" label="Not done" class="switch" @click="() => { this.show^=1 }"></mu-switch>
          </mu-col>
          <mu-col span="4">
            <mu-switch v-model="notChecked" label="Not check" class="switch" @click="() => { this.show^=2 }"></mu-switch>
          </mu-col>
          <mu-col span="4">
            <mu-switch v-model="done" label="Done" class="switch" @click="() => { this.show^=4 }"></mu-switch>
          </mu-col>
        </mu-row>
      </div>
      <div class="text">
        <mu-list textline="three-line">
          <userTask v-for="task in tasks" v-if="(show>>>task.status)&1===1" :key="task.index" v-bind="task"></userTask>
        </mu-list>
    </div>
    </mu-paper>
  </mu-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserInfo',
  data () {
    return {
      tasks: null,
      notDone: true,
      notChecked: true,
      done: true,
      show: 7,
      checkAll: true
    }
  },
  mounted () {
    this.tasks = this.getUserTasks
  },
  computed: {
    ...mapGetters('user', [
      'getUserTasks'
    ])
  }
}
</script>

<style scoped>
.text {
  padding: 5px;
  background: #fff;
}
.switch {
  color: #2196f3;
  padding:0 5px;
}
</style>
