# API using Node.JS, Prisma and DOcker

## First steps

1.  <code>yarn init -y</code>
2.  Create a file: docker-compose.yml
3.  Run: <code> sudo docker-compose up -d</code>
4.  To see the containers: <code>sudo docker ps</code>
5.  Install Prisma <code>yarn add prisma @prisma/client</code>
6.  Init Prisma <code>yarn prisma init</code>
7.  Config file:
    > .env
8.  Start build the Prisma schema.
9.  Create the migration <code>yarn prisma migrate dev --name init</code>
10. Create folder _src_ and inside a file _index.js_
11. Install the packages: <code>yarn add express cors dotenv</code>
12. Build your code to up and running your server.
13. Install nodemon as dev dependencies: <code>yarn add -D nodemon</code>
14. In _package.json_ file add new lines to execute nodemon:
    <code>
    "scripts": {
    "start": "nodemon ./src/index.js"
    },
    </code>
15. Instal _sucrase_ package as dev dependencies: <code>yarn add -D sucrase</code>
16. In the root folder, create a file _nodemon.json_, with this code:
    <code>
    {
    "execMap": {
    "js":"node -r sucrase/register"
    }
    }
    </code>
17. Run: <code>yarn start</code>
18. Inside _/src_:

    - Create another folder _/services_ with file _prisma.js_ to initialize the Prisma instance.
      <code>
      import { PrismaClient } from "@prisma/client";

      export const prisma = new PrismaClient();
      </code>

    - Create another folder _/repositories_ with file _user.repository.js_ to manage the relation between the model and the database.
      <code>
      import { prisma } from "../services/prisma";

            export const createUser = async () => {
            const user = await prisma.user.create({
            data,
            });
            return user;
            };

        </code>

    - Create another folder _/controllers_ with file _user.controller.js_ to manage the data between the model and the database.
      <code>
      import { createUser } from "../repositories/user.repository";

      export const create = async (req, res) => {
      try {
      const user = await createUser(req.body);
      res.status(200).send(user);
      } catch (error) {
      res.status(400).send(e);
      }
      };
      </code>

    - Create another folder _/routes_ with 2 files: _index.js_ and _user.routes.js_.

      - index.js:
        <code>
        import userRoutes from "./user.routes";

        export default function router(app) {
        userRoutes(app);
        }
        </code>

      - user.routes.js:
        <code>
        import { create } from "../controllers/user.controller";

        const userRoutes = (app) => {
        app.post("/user", create);
        };

        export default userRoutes;
        </code>

19. Install the package for crypto <code>yarn add brcypt</code> and import inside the user controller
20. Install package Yup for data validation <code>yarn add yup</code>

- Create the rules for data validation.

21. Build the user repositories, controllers and routes.
