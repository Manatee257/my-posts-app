import '../styles/globals.scss'
require('dotenv').config();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
