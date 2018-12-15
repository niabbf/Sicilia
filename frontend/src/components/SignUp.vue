<template>
  <div style="height: 100%; width: 100%">
    <div class="xy-center">
    <logo></logo>
    <mu-container class="margin-top-40">
      <mu-form ref="form" :model="validateForm" class="mu-form">
        <mu-form-item prop="username" label="Username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="password" label="Password" :rules="passwordRules">
          <mu-text-field v-model="validateForm.password" prop="password" :action-icon="visibility_pwd?'visibility_off':'visibility'" :action-click="() => (visibility_pwd=!visibility_pwd)" :type="visibility_pwd ?'text':'password'"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="repeatPassword" label="Confirm password" :rules="repeatPasswordRules">
          <mu-text-field v-model="validateForm.repeatPassword" prop="password" :action-icon="visibility_rpwd?'visibility_off':'visibility'" :action-click="() => (visibility_rpwd=!visibility_rpwd)" :type="visibility_rpwd?'text':'password'"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree" :rules="agreeRules">
          <mu-checkbox label="CJY is a dog" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>
        <mu-form-item style="width:100%;">
          <div style="position:absolute;left:50%;transform:translateX(-50%);">
            <mu-button color="primary" @click="submit">Sign Up</mu-button>
            <mu-button @click="clear">Reset</mu-button>
          </div>
        </mu-form-item>
      </mu-form>
      <mu-button flat color="primary" @click="toLogin">
        <mu-icon value="arrow_back"></mu-icon>Back to Login
      </mu-button>
    </mu-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: 'Username is a must' }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: 'Password is a must' },
        { validate: (val) => val.length >= 6, message: 'Length of password must be greater than 5' }
      ],
      repeatPasswordRules: [
        { validate: (val) => val === this.validateForm.password, message: 'Different from password' }
      ],
      agreeRules: [
        { validate: (val) => !!val, message: 'Agreement is a must' }
      ],
      visibility_pwd: false,
      visibility_rpwd: false,
      showDialog: false,
      dialogText: '',
      validateForm: {
        username: '',
        password: '',
        repeatPassword: '',
        isAgree: false
      }
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions('user', [
      'logUp'
    ]),
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
      })
    },
    clear () {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        repeatPassword: '',
        visibility: false,
        isAgree: false
      }
    },
    toLogin () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
.xy-center{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
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
