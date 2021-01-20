import express, {
  Request,
  Response,
  NextFunction,
} from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from "body-parser";
import compression from 'compression';
import routes from './components/index';
import config from '../config'
import { handleError } from './middlewares/error.middleware'

const { server } = config

class Express {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
  }

  private initializeMiddlewares() {
    this.app.options('*', cors())

    this.app.use(bodyParser.json());
    this.app.use(compression())
    this.app.use(
      helmet({
        referrerPolicy: {
          policy: 'origin-when-cross-origin',
        },
      })
    )
    this.app.use(routes)
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cookieParser())

    this.app.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        handleError(err, res)
      }
    )
  }

  public listen() {
    this.app.listen(server.port, () => {
      console.log(`# Application is listening on port ${server.port} #`)
    })
  }
}

export default Express;