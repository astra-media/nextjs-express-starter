import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import store from '../store'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
