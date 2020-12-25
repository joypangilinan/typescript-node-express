"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const index_1 = __importDefault(require("./components/index"));
const config_1 = __importDefault(require("../config"));
const { server } = config_1.default;
class Express {
    constructor() {
        this.app = express_1.default();
        this.initializeMiddlewares();
    }
    // public getServer() {
    //   return this.app;
    // }
    initializeMiddlewares() {
        this.app.options('*', cors_1.default());
        this.app.use(cors_1.default({
            origin: function (origin, cb) {
                const env = server.env;
                if (env === 'local') {
                    return cb(null, true);
                }
                return cb(null, true);
            },
        }));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default({
            referrerPolicy: {
                policy: 'origin-when-cross-origin',
            },
        }));
        this.app.use(index_1.default);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(cookie_parser_1.default());
    }
    // private initializeRoutes(routes: Routes[]) {
    //   routes.forEach(route => {
    //     this.app.use('/', route.router);
    //   });
    // }
    listen() {
        this.app.listen(server.port, () => {
            console.log(`# Application is listening on port ${server.port} #`);
        });
    }
}
exports.default = Express;
//# sourceMappingURL=express.js.map