import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../gatsby-components/seo"
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import reducer from '../store/reducer'

import Joined from '../components/Joined/Joined'

const store = createStore(reducer);

const IndexPage = () => (
  <Provider store= {store}>
  <Layout>
    <SEO title="Beer Bartender" keywords={[`Beer`, `Beers`, `gatsby`]} />
    <h1>Besian's Beer Bartender</h1>
    <p>Please make your selections below.</p>
    <p>Now enjoy some excellent beer.</p>
    <Joined/>
    <br/>
    <br/>
  </Layout>
  </Provider>
)
export default IndexPage