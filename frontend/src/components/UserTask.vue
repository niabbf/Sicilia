<template>
  <mu-slide-right-transition>
    <mu-list-item avatar :ripple="true" button class="list-item">
      <mu-list-item-content>
        <mu-list-item-title class="title">{{ subtitle }}</mu-list-item-title>
        <mu-list-item-sub-title >
          <span style="color: rgba(0,0,0,0.5)">{{ adr }}</span><br>
          <span class="time-start">{{start}}</span>
          <span class="time-connector">~</span>
          <span class="time-end">{{end}}</span>
        </mu-list-item-sub-title>
        <mu-list-item-sub-title>
          <mu-chip v-for="tag in tags" :key="tag.text" :color="tag.color" class="tag">{{tag.text}}</mu-chip>
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-badge v-if="status===0" content="not done" color="teal"></mu-badge>
        <mu-badge v-if="status===1" content="not checked" color="orange"></mu-badge>
        <mu-badge v-if="status===2" content="done" color="info"></mu-badge>
        <mu-icon value="user"></mu-icon>
      </mu-list-item-action>

    </mu-list-item>
  </mu-slide-right-transition>
</template>

<script>
export default {
  name: 'UserTask',
  props: {
    status: Number,
    adr: String,
    start: String,
    end: String,
    tags: Array,
    subtitle: String,
    info: String
  },
  data () {
    return {
      showDetails: true
    }
  },
  methods: {
    changeView: function () {
      this.showDetails = !this.showDetails
    }
  }
}
</script>

<style scoped>
.list-item {
  padding-bottom: 10px;
  margin: 5px 3px;
  border-bottom: solid 1px rgba(0,0,0,0.3);
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.time-start {
  font-family: Microsoft Yahei;
  font-size: 13px;
  color: black;
  padding-right: 3px;
}
.time-connector {
  font-family: Microsoft Yahei;
  font-size: 13px;
  color: black;
  padding-left: 0;
  padding-right: 0;
}
.time-end {
  font-family: Microsoft Yahei;
  font-size: 13px;
  color: red;
  padding-left: 3px;
}
.not-done {
  font-size: 10px;
  font-weight: bold;
  background-color: red
}
.not-checked {
  font-size: 10px;
  font-weight: ;
}
.tag{
  height: 20px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>
