import { createStoreon } from 'storeon'
import { persistState } from '@storeon/localstorage'
import { storeonDevtools, storeonLogger } from 'storeon/devtools'


import { user } from './events/user'

let storeEvents = [user, persistState(['auth', 'user'])]
if (process.env.NODE_ENV !== 'production') {
  storeEvents = [storeonDevtools, storeonLogger, ...storeEvents]
}

const store = createStoreon(storeEvents)

export default store
