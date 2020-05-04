import { StoreonModule } from 'storeon'
import { StoreAppConfig } from '../@types/store'

export const party: StoreonModule<StoreAppConfig> = (store) => {
  store.on('@init', () => ({
      color: '',
      positions: [],
      retired: [null]
  }))

  store.on('saveMove', (state, newPosition) => {
    return {
      ...state,
      positions: newPosition
    }
  })

  store.on('initColor', (state, newColor) => {
    return {
      ...state,
      color: newColor
    }
  })

  store.on('changePosition', (state, [address, value]) => {
    console.log(address)
    console.log(value)
    return {
      ...state,
      positions: {
        ...state.positions,
        [address]: value,
      }
    }
  })

  // store.on('addRetired', ({retired}, newRetired) => {
  //   return {
  //     retired.push(newRetired)
  //   }
  // })

}
