import jwt from 'jsonwebtoken'

import User from '../models/user.js'
import { secret } from '../config/environment.js'


export default async function secureRoute(req, res, next) {
  try {

    const authToken = req.headers.authorization
 
    if (!authToken || !authToken.startsWith('Bearer')) {
  console.log(authToken)
      return res.status(401).send({ message: 'Unauthorized step 4' })
    }

    const token = authToken.replace('Bearer ', '')

    console.log('🤖' + ' ' + authToken)
    console.log('🤖' + ' ' + token)

  
 
    jwt.verify(token, secret, async (err, data) => {
  
      if (err) {
        return res.status(401).send({ message: 'Unauthorized sstep 5' })
      }


      const user = await User.findById(data.userId)

    
      if (!user) {
        return res.status(401).send({ message: 'Unauthorized step 6' })
      }

   
      req.currentUser = user

      next()
    })
  } catch (err) {
    res.status(401).send({ message: 'Unauthorized step 7' })
  }
}