import {mount, shallow, shallowMount} from '@vue/test-utils'
import Skills from '@/components/Skills.vue'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Checking main page', () => {

  test('SKills component is included', () => {

    const wrapper = shallowMount(Skills, {
      mocks: {
        $t: (msg) => {msg}
      }
    })
    expect(wrapper.element).toBeTruthy()
  })
})
