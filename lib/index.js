"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
let app = (0, express_1.default)();
let port = config_1.default.PORT;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const user_1 = __importDefault(require("./routes/user"));
app.use('/', user_1.default);
const product_1 = __importDefault(require("./routes/product"));
app.use('/product', product_1.default);
mongoose_1.default.connect(config_1.default.DB_URL)
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.log(err.message));
app.listen(port, () => {
    console.log(`app is running on port ${port}.`);
});
