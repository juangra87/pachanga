import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import CriteriaSelector from '~/components/criteria/CriteriaSelector.vue'


const localVue = createLocalVue()

localVue.use(Vuex)
let state
let store
let actions
beforeEach(() => {
  jest.clearAllMocks()

  state = {
    criteria: {
      list: []
    }
  }

  actions = {
    moduleActionClick: jest.fn()
  }
  store = new Vuex.Store({
    modules: {
      criteria: {
        state,
        actions,
        namespaced: true
      }
    }
  })
})

describe('Checking main page', () => {


  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })



  test('CriteriaSelector component is included', () => {

    const wrapper = shallowMount(CriteriaSelector, {
      mocks: {
        $t: (msg) => {msg},
        store,
        localVue
      }
    })
    expect(wrapper.element).toBeTruthy()
  })
})
