// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '탭 제목--A Better Nuxt 3 Starter',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }]
    }
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt'
  ],
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: true
      })
    ],
    server: {
      proxy: {
        '/http_api_host': {
          target: 'http://127.0.0.1:3000',
          // target: 'http://localhost:8082', //localhost가 작동안됨, 추후 확인필요
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
          rewrite: (path) => {
            console.log('proxy.log---', path)
            return path.replace(/^\/http_api_host/, '')
          },
          secure: false
          // ws: true,
        }
      }
    }
  }
})
