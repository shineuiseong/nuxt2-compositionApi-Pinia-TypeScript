import { defineComponent as defineComponent$1 } from '@nuxtjs/composition-api'
import { NuxtApp } from '@nuxt/types/app'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Pinia } from 'pinia'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance
    $pinia: Pinia
  }

  interface Context {
    $axios: NuxtAxiosInstance
    $pinia: Pinia
  }
}
declare global {
  const $nuxt: NuxtApp
}
