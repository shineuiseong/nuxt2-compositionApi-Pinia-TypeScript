import { defineStore } from 'pinia'

interface State {
  userName: string
}

export const useGlobalStore = defineStore('global', {
  state: (): State => {
    return { userName: 'aa' }
  },
  getters: {
    getUserName: (state) => state.userName
  },
  actions: {
    setUserName(name: string) {
      this.userName = name
    }
  }
})
