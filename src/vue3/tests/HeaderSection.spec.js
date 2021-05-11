import { mount } from '@vue/test-utils'
import HeaderSection from '../src/components/HeaderSection.vue'

describe('HeaderSection.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HeaderSection)
    expect(wrapper.vm).toBeTruthy()
  })
})
