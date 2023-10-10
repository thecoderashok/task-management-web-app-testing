import "reflect-metadata"
import { DataSource } from "typeorm"


const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "flora.db.elephantsql.com",
    port: 5432,
    username: "vicjbbls",
    password: "iBRTV9-Er9kKeBKppJb5lwa5L4nliD40",
    database: "vicjbbls",
    synchronize: true,
})


// type: "postgres",
// host: "localhost",
// port: 5432,
// username: "test",
// password: "test",
// database: "test",
// synchronize: true,
// logging: false,
// entities: [User],
// migrations: [],
// subscribers: [],
