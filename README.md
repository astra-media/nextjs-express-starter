# Next.js + Express Starter Kit (SSR)

A full-stack boilerplate template leveraging **Next.js, Express, and Redux Toolkit**.  
This template provides a robust foundation for developing modern web applications with **server-side rendering (SSR)** using Next.js and Express. It is designed for flexibility and can be easily customized or extended.

The project is structured with a **custom Next.js server**, allowing advanced routing patterns and middleware integration.

## Project Structure

The repository is organized into two primary directories:

- **`backend/`** – Express.js server
- **`src/`** – Next.js application

## Features

- **Pre-configured with Redux Toolkit** – Includes `{ createSlice }` and `{ createApi }` for state management and API handling.
- **Custom Hook** – `useIsClient` hook prevents React hydration mismatches.
- **Styled with React-Bootstrap** – Pre-integrated with `react-bootstrap` for easy UI styling.
- **Navigation & Routing** – Simple navbar with `Home` and `Features` pages as examples.
- **Middleware Setup** – Express server configured with `morgan`, `cors`, and `body-parser`.
- **ES Module Support** – Uses `.mjs` extension for native ES module compatibility.
- **Developer Tools** – `nodemon` for hot-reloading during backend development.

## Tech Stack

- **Client:** Next.js, Redux Toolkit
- **Server:** Express.js
- **Styling:** React-Bootstrap

## Requirements

- **Node.js v18+**
- _(Optional)_ React Developer Tools & Redux DevTools for debugging

## Installation & Setup

Clone the repository and install dependencies:

```sh
# Using degit (recommended)
npx degit https://github.com/astra-media/nextjs-express-starter.git example
cd example

# OR Clone via Git
git clone https://github.com/astra-media/nextjs-express-starter.git example
cd example

# Install dependencies
npm install
```

### Running the Development Server

```sh
npm run dev  # Starts the Express server with nodemon
```

> The server runs on **http://localhost:3000/**.

### Building for Production

```sh
npm run build  # Bundles the app and creates the 'dist' directory
```

## Available Scripts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `npm run dev`   | Starts `backend/server.mjs` with Nodemon (hot-reloading) |
| `npm start`     | Runs `backend/server.mjs` using Node.js                  |
| `npm run build` | Builds the application for production                    |

## Related Projects

- **[react-express-starter][2]** – A full-stack boilerplate using Express, React + Vite, Redux Toolkit, and React Router.

## License

This project is licensed under the MIT License. See the [LICENSE][1] file for details.

[1]: https://github.com/astra-media/nextjs-express-starter/blob/main/LICENSE 'LICENSE'
[2]: https://github.com/astra-media/react-express-starter.git 'react-express-starter'
