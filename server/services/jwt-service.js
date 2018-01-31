import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config'

export default {
  genToken(data, expiration) {
    return jwt.sign(data, JWT_KEY, { expiresIn: expiration })
  },
  verify(token) {
    return jwt.verify(token, JWT_KEY)
  },
  verifyNoExp(token) {
    return jwt.verify(token, JWT_KEY, { ignoreExpiration: true })
  }
};