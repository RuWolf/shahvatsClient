import { createStoreon } from 'storeon'
import { persistState } from '@storeon/localstorage'
import { storeonDevtools, storeonLogger } from 'storeon/devtools'
// import { errors } from './events/error'
import { user } from './events/user'
import { party } from './events/party'

let storeEvents = [user, party, persistState(['auth', 'user', 'color', 'positions', 'retired'])]
if (process.env.NODE_ENV !== 'production') {
  storeEvents = [storeonDevtools, storeonLogger, ...storeEvents]
}

const store = createStoreon(storeEvents)

export default store
