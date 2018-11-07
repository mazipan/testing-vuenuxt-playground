import { shallowMount, createLocalVue } from '@vue/test-utils'
import initNuxt from './helpers/init-nuxt'

initNuxt.initNuxt();

global.shallowMount = shallowMount
global.createLocalVue = createLocalVue
