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
