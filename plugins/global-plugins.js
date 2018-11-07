import Vue from 'vue'

// import { CHECK_AUTH } from "@/store/actions.type";
import ApiService from '@/common/api.service'
import DateFilter from '@/common/date.filter'
import ErrorFilter from '@/common/error.filter'

Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)

ApiService.init()
