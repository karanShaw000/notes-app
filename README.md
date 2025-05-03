## 📖 Notes App

**Notes App** is a Full Stack Application built using the **MERN Stack** (MongoDB, Express, React, Node.js). This is a POC for Bornov Technologies

[Deployed in azure](https://blue-river-01a3c6200.6.azurestaticapps.net/)

### 🔧 Frontend

- Built with **React**.
- **Shadcn** as ui library

### 🔙 Backend

- Built with **Express.js**.

### 🗄️ Database

- Used **MongoDB** as the database.
- Integrated **Mongoose** as the ODM to model and interact with the data.



## 🛠️ Run Locally

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone git@github.com:karanShaw000/notes-app.git
```

---

### 2. Setup the Backend

```bash
cd notes-app/server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file from the sample:

```bash
cp .env.sample .env
```

Edit `.env.local` and provide the following values:

- `MONGODB_URL` – Your MongoDB connection string
- `PORT` – (Optional) Default is `5000`

> ⚠️ If you change the backend port from `5000`, make sure to update the port in `client/src/libs/network.ts` for development.

Start the backend server:

```bash
npm run dev
```

---

### 3. Setup the Frontend

```bash
cd ../client
```

Install dependencies:

```bash
npm install
```

Start the React app (usually runs on `http://localhost:5173`):

```bash
npm run dev
```

---

You're now all set to use **Notes-app** locally!

