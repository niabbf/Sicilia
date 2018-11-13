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
