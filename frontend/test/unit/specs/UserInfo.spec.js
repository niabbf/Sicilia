import Vue from 'vue'
import UserInfo from '@/components/UserInfo'
import { getToken } from '@/auth'

describe('UserInfo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(UserInfo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header mu-drawer mu-list mu-list-item mu-list-item-content mu-list-item-title').textContent)
      .toEqual(getToken())
  })
})
