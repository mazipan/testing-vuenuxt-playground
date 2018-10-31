/* eslint-env jest */
import { shallowMount } from '@vue/test-utils'
import Component from '../../pages/index.vue'

describe('page /', () => {
  test('success mounting components', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper).toBeTruthy()
  })
})
