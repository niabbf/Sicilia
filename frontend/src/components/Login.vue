<template>
  <div style="height: 100%; width: 100%;">
    <div class="xy-center">
    <logo></logo>
    <mu-container class="margin-top-40">
      <mu-form ref="form" :model="form" class="mu-form">
        <mu-form-item label="Username" prop="username" :rules="usernameRules">
          <mu-text-field v-model="form.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="Password" prop="password" :rules="passwordRules" @keyup.enter.native="submit()">
          <mu-text-field v-model="form.password" prop="password" :type="visibility_pwd?'text':'password'" :action-icon="visibility_pwd?'visibility_off':'visibility'" :action-click="() => visibility_pwd=!visibility_pwd"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <div style="position:absolute;left:50%;transform:translateX(-50%)">
            <mu-button color="primary" @click="submit">
            Login
            </mu-button>
          </div>
        </mu-form-item>
      </mu-form>
      <span>Don't have an account &nbsp;&nbsp;|</span>
      <mu-button flat color="primary" @click="toSignUp">
          Sign Up
          <mu-icon right value="keyboard_arrow_right"></mu-icon>
      </mu-button>
      <mu-dialog title="Fail" width="360" :open.sync="showDialog">
        {{dialogText}}
        <mu-button slot="actions" flat color="primary" @click="showDialog=false">Close</mu-button>
      </mu-dialog>
    </mu-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: 'Username is a must' }
      ],
      passwordRules: [
        { validate: (val) => val.length >= 6, message: 'Length of password must be greater than 5' }
      ],
      visibility_pwd: false,
      showDialog: false,
      dialogText: '',
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions('user', [
      'loginUser'
    ]),
    submit () {
      this.$refs.form.validate().then((result) => {
        if (result === true) {
          this.loginUser({ name: this.form.username, pwd: this.form.password, callback: this.alertLoginResult })
        }
      })
    },
    alertLoginResult (status) {
      if (status === 'success') {
        this.$router.push({ path: '/userinfo' })
      } else {
        this.dialogText = status
        this.showDialog = true
      }
    },
    toSignUp () {
      this.$router.push({ path: '/signup' })
    }
  }
}
</script>

<style scoped>
.xy-center{
  position: absolute;
  top: 40%;
  left: 50%;
  width: 80%;
  max-width: 540px;
  transform: translate(-50%, -50%);
}
.margin-top-40{
  margin-top: 40px;
}
.mu-form{
  margin-left: 10%;
  text-align: left;
  width: 80%;
  margin: 0 auto;
  max-width:460px;
  white-space: nowrap;
}
</style>
