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
          <mu-text-field v-model="validateForm.password"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="repeatPassword" label="Confirm password" :rules="repeatPasswordRules">
          <mu-text-field v-model="validateForm.repeatPassword"></mu-text-field>
        </mu-form-item>
        <mu-form-item style="margin-left:25%">
          <mu-button color="primary" @click="submit">提交</mu-button>
          <div style="width:5%"></div>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
      <mu-button flat color="primary">
        <mu-icon value="arrow_back"></mu-icon>Back to Login
      </mu-button>
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
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名' }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须输入密码' },
        { validate: (val) => val.length >= 6, message: '密码长度必须大于等于6' }
      ],
      repeatPasswordRules: [
        { validate: (val) => val === this.validateForm.password, message: '与密码不符' }
      ],
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
    toLogin: function () {
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
