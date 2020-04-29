import { StoreonModule } from 'storeon'
import { StoreAppConfig } from '../@types/store'

export const errors: StoreonModule<StoreAppConfig> = (store) => {
  store.on('@init', () => ({
    errors: {
      latest: null,
      history: [null],
    },
  }))

  store.on('logError', ({ errors }, error) => {
    console.log(error)
    if (!error) return { errors }
    errors.latest = error
    errors.history.push(error)
    return { errors }
  })
}
