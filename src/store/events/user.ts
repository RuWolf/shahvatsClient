import { StoreonModule } from 'storeon'
import { StoreAppConfig } from '../@types/store'

const initialState = {
  auth: {
    authenticated: false,
    token: '',
  },
  user: {},
}

export const user: StoreonModule<StoreAppConfig> = (store) => {
  store.on('@init', () => initialState)

  store.on('saveUserData', (state, userData) => {
    return {
      ...state,
      user: userData,
    }
  })

  store.on('saveToken', (state, tokenData) => {
    return {
      ...state,
      auth: tokenData,
    }
  })

  store.on('logout', () => initialState)
}
