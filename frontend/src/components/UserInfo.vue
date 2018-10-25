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
</style>
