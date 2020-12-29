"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../config/index"));
const { database } = index_1.default;
const uri = database.dbUrl;
mongoose_1.default.connection.once("open", () => {
    console.log("successfully connected to the database!");
});
mongoose_1.default.connection.on("error", console.error.bind(console, "connection error:"));
exports.default = async () => {
    await mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
//# sourceMappingURL=database.js.map