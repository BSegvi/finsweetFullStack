# Setup
## Installation
- Clone the project using `git clone`
### Frontend
- Go in the frontend directory and install the dependencies  
```
cd frontend
npm install
```
- Start the app with `npm run dev`

### Backend
- Return to the root and position yourself in the backend directory `cd ./backend/`
- Install the backend dependencies `npm install`
- Create a `env` file and replace the placeholders spelled in all uppercase letters with your PostgreSQL database credentials
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```
- Generate your SQL migration files and run them against the database
```
npx prisma migrate dev --name init
```
- Start the server with the `npm run start:dev` command
- Open the prisma studio with `npx prisma studio`
