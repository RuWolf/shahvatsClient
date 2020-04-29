import React from 'react'

import {Errors} from './errors'

export interface StoreAppConfig {
  app: string
  settings: {
    asideLeftIsOpened: boolean
  }
  language: {
    active: 'ru-RU' | 'en-EN'
  }
  refs: {
    [key: string]: React.Ref<HTMLDivElement> | null
  }
  errors: Errors
  auth: {
    authenticated: boolean,
    token: string
  }
  user: {
    [key: string]: any
  }
  token: string
  color: string,
  positions: [],
  retired: [null]

}
