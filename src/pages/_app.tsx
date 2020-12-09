import SEO from '../components/SEO';
import GlobalStyles from "../styles/GlobalStyles";
import GlobalStyle from '../styles/GlobalStyles';

  export default function MyApp({ Component, pageProps }) {
  return (
  <>
   <SEO/>
     <GlobalStyles/>
     <Component {... pageProps} />

  </>


  )
}

