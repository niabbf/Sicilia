<template>
  <mu-card style="width: 100%; max-width: 375px; margin: 0 auto; margin-top: 20px">
    <mu-flex class="flex-wrapper" justify-content="start">
      <mu-card-header :title="name" :sub-title="adr">
        <mu-avatar slot="avatar">
          <img src="../assets/head.jpg">
        </mu-avatar>
      </mu-card-header>
    </mu-flex>
    <mu-flex class="flex-wrapper" justify-content="start" style="margin-left: 15px">
      <mu-chip v-for="tag in tags" :key="tag.text" :color="tag.color" class="tag">{{tag.text}}</mu-chip>
    </mu-flex>
    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-demo-50" justify-content="center">From: {{issuedTime}}</mu-flex>
      <mu-flex class="flex-demo-50" justify-content="center">To: {{dueTime}}</mu-flex>
    </mu-flex>
    <div class="text ellipsis" style="margin-left: 10px; margin-right: 10px">
      <mu-card-text class="text-concat">{{info}}</mu-card-text>
    </div>

    <mu-card-actions>
      <mu-flex class="flex-wrapper" align-items="center">
        <mu-flex class="flex-demo-50" justify-content="center" fill>
        </mu-flex>
        <mu-flex class="flex-demo-50" justify-content="center" fill>
          <mu-button icon color="red">
            <mu-icon value="thumb_up"></mu-icon>
          </mu-button>
          <span>+0</span>
          <mu-button icon color="blue">
            <mu-icon value="thumb_down"></mu-icon>
          </mu-button>
        </mu-flex>
      </mu-flex>
    </mu-card-actions>
  </mu-card>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    name: String,
    adr: String,
    tags: Array,
    info: String,
    issuedTime: String,
    dueTime: String,
  }
}
</script>

<style scoped>
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
.flex-wrapper {
  width: 100%;
  margin-top: 8px;
}
.flex-wrapper:first-child {
  margin-top: 0;
  margin-left: 0;
}
.flex-demo-50 {
  width: 50%;
  height: 32px;
  /*background-color: #e0e0e0;*/
  text-align: center;
  line-height: 32px;
  margin-left: 8px;
}
</style>
