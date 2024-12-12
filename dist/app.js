"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const role_route_1 = __importDefault(require("./routes/role.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const member_route_1 = __importDefault(require("./routes/member.route"));
const activity_log_route_1 = __importDefault(require("./routes/activity_log.route"));
const error_1 = require("./middleware/error");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
//post a welcome message to the root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});
app.use("/roles", role_route_1.default);
app.use("/users", user_route_1.default);
app.use("/members", member_route_1.default);
app.use("/activity_logs", activity_log_route_1.default);
app.use(error_1.errorMiddleware);
exports.default = app;
