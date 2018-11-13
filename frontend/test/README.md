# sicilia-frontend

## frontend test by jest

###test for Login.vue
```bash
import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.xy-center margin-top-40 mu-dialog').textContent)
      .toEqual('')
  })
})
```

###test for UserInfo.vue
```bash
import Vue from 'vue'
import UserInfo from '@/components/UserInfo'

describe('UserInfo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(UserInfo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.body h1').textContent)
      .toEqual('The tasks are as bellow:')
  })
})
```

###references:
https://github.com/alexjoverm/vue-testing-series
