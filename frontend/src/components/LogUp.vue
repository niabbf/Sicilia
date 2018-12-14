<template>
  <div style="height: 100%; width: 100%">
    <div class="xy-center" style="width: 80%">
    <logo></logo>
    <mu-container class="margin-top-40">
      <mu-text-field v-model="username" label="Username" full-width></mu-text-field><br/>
      <mu-text-field v-model="password" label="Password" type="password" full-width></mu-text-field><br/>
      <mu-flex justify-content="center" align-items="center" class="margin-top-40">
        <mu-button full-width large color="primary" v-on:click="logUp()">
          Log Up
          <mu-icon right value="keyboard_arrow_right"></mu-icon>
        </mu-button>
      </mu-flex>
      <mu-flex justify-content="center" align-items="center" class="margin-top-40">
        <mu-button full-width large color="primary" v-on:click="toLogin()">
          <mu-icon left value="keyboard_arrow_left"></mu-icon>
          Log in
        </mu-button>
      </mu-flex>
      <mu-dialog title="Dialog" width="360" :open.sync="showDialog">
        {{dialogText}}
        <mu-button slot="actions" flat color="primary" @click="showDialog = false">Close</mu-button>
      </mu-dialog>
    </mu-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LogUp',
  data () {
    return {
      username: '',
      password: '',
      showDialog: false,
      dialogText: ''
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions('user', [
      'logUp'
    ]),
    toLogin: function () {
      this.$router.push({ path: '/login' })
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
</style>
