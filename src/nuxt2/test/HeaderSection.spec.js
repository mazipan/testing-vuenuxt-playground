import { mount } from '@vue/test-utils'
import HeaderSection from '@/components/HeaderSection.vue'

describe('HeaderSection.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HeaderSection)
    expect(wrapper.vm).toBeTruthy()
  })
})
