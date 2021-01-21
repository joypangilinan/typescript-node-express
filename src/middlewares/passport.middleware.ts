import passport from 'passport'
import JWTStrategy from 'passport-jwt'
import Config from '../../config'

const { jwt } = Config
const { Strategy, ExtractJwt } = JWTStrategy
const jwtSecret = jwt.publicKey


const jwtOptions: any = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
    passReqToCallback: true,
}

passport.use(
    'jwt',
    new Strategy(jwtOptions, async (req: any, payload: any, done: any) => {
        return done(null, payload)
    })
)

passport.serializeUser((obj, cb) => {
    cb(null, obj)
})

passport.deserializeUser((obj, cb) => {
    cb(null, obj)
})

export default passport
