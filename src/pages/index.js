import styles from '@/styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import Meta from '@/components/Meta'

export default function Home() {
  return (
    <>
      <Meta title='Home' />
      <div>
        <h1 class='mb-4'>Next.js + Express Starter Kit (SSR)</h1>
        <p>
          A full-stack boilerplate template leveraging{' '}
          <strong> Next.js, Express, and Redux Toolkit</strong>. This template
          provides a robust foundation for developing modern web applications
          with <strong>server-side rendering (SSR)</strong>.
        </p>

        <h2>Project Structure</h2>
        <ul>
          <li>
            <strong>backend/</strong> – Express.js server
          </li>
          <li>
            <strong>src/</strong> – Next.js application
          </li>
        </ul>

        <h2>Features</h2>
        <ul>
          <li>
            Pre-configured with Redux Toolkit (`createSlice` and `createApi`).
          </li>
          <li>
            Custom `useIsClient` hook prevents React hydration mismatches.
          </li>
          <li>Styled with `react-bootstrap` for easy UI styling.</li>
          <li>Navigation with `Home` and `Features` pages as examples.</li>
          <li>Middleware: `morgan`, `cors`, `body-parser` configured.</li>
          <li>ES Module support using `.mjs`.</li>
          <li>Developer tools: `nodemon` for backend hot-reloading.</li>
        </ul>

        <Link href={'/features'}>
          <p>Go to features screen</p>
        </Link>

        <h2>Tech Stack</h2>
        <ul>
          <li>
            <strong>Client:</strong> Next.js, Redux Toolkit
          </li>
          <li>
            <strong>Server:</strong> Express.js
          </li>
          <li>
            <strong>Styling:</strong> React-Bootstrap
          </li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>Node.js v18+</li>
          <li>Optional: React Developer Tools & Redux DevTools</li>
        </ul>

        <h2>Installation & Setup</h2>
        <pre>
          <code>
            npx degit https://github.com/astra-media/nextjs-express-starter.git
            example
            <br />
            cd example
            <br />
            <br />
            # OR Clone via Git git clone
            <br />
            https://github.com/astra-media/nextjs-express-starter.git example
            <br />
            cd example
            <br />
            <br />
            # Install dependencies
            <br />
            npm install
          </code>
        </pre>

        <h2>Running the Development Server</h2>
        <pre>
          <code>npm run server # Starts the Express server with nodemon</code>
        </pre>
        <p>
          The server runs on <strong>http://localhost:3000/</strong>.
        </p>

        <h2>Building for Production</h2>
        <pre>
          <code>
            npm run build # Bundles the app and creates the 'dist' directory
          </code>
        </pre>

        <h2>Available Scripts</h2>
        <table class='table table-bordered'>
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>npm run dev</code>
              </td>
              <td>Starts `backend/server.mjs` with Nodemon (hot-reloading)</td>
            </tr>
            <tr>
              <td>
                <code>npm start</code>
              </td>
              <td>Runs `backend/server.mjs` using Node.js</td>
            </tr>
            <tr>
              <td>
                <code>npm run build</code>
              </td>
              <td>Builds the application for production</td>
            </tr>
          </tbody>
        </table>

        <h2>Related Projects</h2>
        <p>
          <a href='https://github.com/astra-media/react-express-starter.git'>
            react-express-starter
          </a>
          – A full-stack boilerplate using Express, React + Vite, Redux Toolkit,
          and React Router.
        </p>

        <h2>License</h2>
        <p>
          This project is licensed under the MIT License. See the{' '}
          <Link
            href={
              'https://github.com/astra-media/nextjs-express-starter/blob/main/LICENSE'
            }
            target='_blank'
          >
            LICENSE
          </Link>{' '}
          file for details.
        </p>
      </div>
    </>
  )
}
