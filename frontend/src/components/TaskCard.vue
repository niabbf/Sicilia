<template>
  <mu-card v-bind:class="cardClass" @click="changeView">
    <mu-flex class="flex-wrapper" justify-content="start">
      <mu-card-header :title="user" :sub-title="location">
        <mu-avatar slot="avatar">
          <img src="../assets/head.jpg">
        </mu-avatar>
      </mu-card-header>
    </mu-flex>
    <mu-flex class="flex-wrapper" justify-content="start" style="margin-left: 15px">
      <mu-chip v-for="tag in tags" :key="tag.text" :color="tag.color" class="tag">{{tag.text}}</mu-chip>
    </mu-flex>
    <div class="text ellipsis" style="margin-left: 10px; margin-right: 10px">
      <mu-card-text class="subtitle">{{subtitle}}</mu-card-text>
      <mu-expand-transition>
        <div v-show="showDetails">
          <mu-card-text class="detail">{{info}}</mu-card-text>
          <mu-card-actions class="card-action">
            <mu-flex class="flex-wrapper" align-items="center">
              <mu-flex justify-content="start" fill>
                <mu-card-text class="time-symbol" align-content="center">
                  <mu-icon size="20" value="attach_money" color="orange"></mu-icon>
                </mu-card-text>
                <mu-card-text class="time" style="padding-left: 0">{{task_sponser}}</mu-card-text>
                <mu-card-text class="time-symbol" align-content="center">
                  <mu-icon size="20" value="access_time" color="indigo"></mu-icon>
                </mu-card-text>
                <mu-card-text class="time" style="padding-left: 0">{{deadline}}</mu-card-text>
              </mu-flex>
              <mu-flex justify-content="center" fill>
                <mu-button color="info" small round style="font-family: Microsoft Yahei" @click="takeTask" v-bind:disabled="disabled">
                  {{buttonText}}
                </mu-button>
              </mu-flex>
            </mu-flex>
          </mu-card-actions>
        </div>
      </mu-expand-transition>
    </div>
  </mu-card>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    user: String,
    location: String,
    task_sponser: String,
    deadline: String,
    tags: Array,
    subtitle: String,
    info: String
  },
  data () {
    return {
      showDetails: false,
      buttonText: '接受任务',
      disabled: false,
      cardClass: 'card'
    }
  },
  methods: {
    changeView: function () {
      this.showDetails = !this.showDetails
    },
    takeTask: function (event) {
      event.stopPropagation()
      this.buttonText = '已接受'
      this.disabled = true
    }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  margin-top: 10px;
}
.time-symbol {
  font-family: Microsoft Yahei;
  color: black;
  padding-right: 0;
  padding-left: 0;
}
.time {
  font-family: Microsoft Yahei;
  font-size: 13px;
  color: black;
}
.text {
  position: relative;
  font-family: Microsoft Yahei;
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
.subtitle {
  font-size: 20px;
  text-align:justify;
}
.detail {
  text-align:justify;
  padding-top: 0;
  padding-bottom: 0;
}
.tag{
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
.card-action {
  padding-bottom: 15px;
}
</style>
