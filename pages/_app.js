// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/navbar'
import '../styles/global.css'
import { ThemeProvider } from '../helpers/ThemeContext';

export default function App({ Component, pageProps }) {
  return(
    <>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) 
}