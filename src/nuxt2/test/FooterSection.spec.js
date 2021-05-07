import { mount } from '@vue/test-utils'
import FooterSection from '@/components/FooterSection.vue'

describe('FooterSection.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FooterSection)
    expect(wrapper.vm).toBeTruthy()
  })
})
