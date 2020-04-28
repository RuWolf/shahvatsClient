import { Errors } from './errors'

export interface StoreAppConfig {
  errors: Errors
  auth: {
    authenticated: boolean,
    token: string
  }
  user: {
    [key: string]: any
  }
  token: string
}
