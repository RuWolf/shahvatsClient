import React, { memo } from 'react'
import Game from '../components/game/ShahvatsDashboard'
import Profile from "../components/profile/profile";

import { useStoreon } from 'storeon/react'


const DefaultLayout = memo(() => {
  return (
    <>
      <Game/>
      {/*<Profile/>*/}
    </>
  )
})

DefaultLayout.displayName = 'DefaultLayout'
export default DefaultLayout
