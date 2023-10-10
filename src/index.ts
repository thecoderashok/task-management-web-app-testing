// import { AppDataSource } from "./data-source"
// import express, { Request, Response } from 'express'


// const port = process.env.PORT || 8000;

// AppDataSource.initialize().then(async () => {
//     const app = express();
//     app.use(express.json());

//     app.listen(port, () => {
//         console.log(`Server is running on http://localhost:${port}`);
//     });

//     app.get('/', (_req: Request, res: Response) => {
//         return res.send('Express Typescript on Vercel')
//     })

// }).catch(error => console.log(error))


import express, { Request, Response } from 'express'
import "reflect-metadata";
import typeorm from "typeorm";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import cors from "cors";
// import { AuthRouter } from "../router/authRouter";


const port = process.env.PORT || 8000;

const Main = async () => {
  const app = express();
  try {
    await createConnection({
      type: "postgres",
      host: "flora.db.elephantsql.com",
      port: 5432,
      username: "vicjbbls",
      password: "iBRTV9-Er9kKeBKppJb5lwa5L4nliD40",
      database: "vicjbbls",
      synchronize: true,
    });
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser());
    
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    // app.use(AuthRouter);

    app.get('/', (_req: Request, res: Response) => {
       return res.send('Express Typescript on Vercel ashok kumar sahoo')
    })
  

  } catch (error) {
    console.log(error);
    throw new Error("Coonection Faild To Database");
  }
};

Main();
