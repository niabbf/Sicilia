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
    <div class="text ellipsis" style="margin-left: 10px; margin-right: 10px">
      <mu-card-text class="text-concat">{{info}}</mu-card-text>
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
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    name: String,
    adr: String,
    tags: Array,
    info: String
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
</style>
