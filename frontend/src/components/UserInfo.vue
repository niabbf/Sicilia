<template>
  <mu-container>
    <mu-tabs :value.sync="active" color="grey600" indicator-color="teal" full-width style="font-size:15px;font-weight:bold">
      <mu-tab>All</mu-tab>
      <mu-tab>To be done</mu-tab>
      <mu-tab>Not checked</mu-tab>
      <mu-tab>Done</mu-tab>
    </mu-tabs>
    <div class="text" v-if="active === 0">
      <taskCard v-for="task in tasks" :key="task.name" v-bind="task"></taskCard>
    </div>
    <div class="text" v-if="active === 1">
      <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
      <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
      <p>“那么就去地狱找到你，我绝对不逃！”</p>
      <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
    </div>
    <div class="text" v-if="active === 2">
      <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
      <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
      <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
      <p>“也许吧，未来……给你了。”</p>
    </div>
  </mu-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserInfo',
  data () {
    return {
      active: 0,
      tasks: null
    }
  },
  mounted: function () {
    this.tasks = this.getTasks
  },
  computed: {
    ...mapGetters('user', [
      'getTasks'
    ])
  }
}
</script>

<style scoped>
.text {
  padding: 5px;
  background: #fff;
}
</style>
