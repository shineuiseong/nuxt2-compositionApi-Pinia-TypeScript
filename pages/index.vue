<template>
  <div>
    <v-btn @click="handleClickEvent">Click Me</v-btn>
    <div>{{ state.name }}</div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useGlobalStore } from '~/stores/global'

// pinia 스토어 할당
const global = useGlobalStore()

const state = reactive({
  test: 'test',
  name: ''
})
const handleClickEvent = () => {
  state.name = global.getUserName
}
</script>
