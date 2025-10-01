/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { GET_DB,CONNECT_DB } from './config/mongodb'
import existhook from 'async-exit-hook'
import {env} from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
const START_SEVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017
  app.use('/v1',APIs_V1)

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello BINH, I am running at ${ hostname }:${ port }/`)
  })
  existhook(() => {
    console.log('exit')
  })
}
CONNECT_DB()
  .then(() => console.log('Connect to DB'))
  .then(()=> START_SEVER())
  .catch(error => {
  console.error(error)
  process.exit(0)
})
