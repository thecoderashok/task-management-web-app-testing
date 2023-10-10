"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "flora.db.elephantsql.com",
    port: 5432,
    username: "vicjbbls",
    password: "iBRTV9-Er9kKeBKppJb5lwa5L4nliD40",
    database: "vicjbbls",
    synchronize: true,
});
//# sourceMappingURL=data-source.js.map