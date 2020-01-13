import React, {Fragment} from "react"
import '../styles/global.css'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import MentorsContainer from '../components/MentorsContainer'
export default () =>(
  <Fragment>
    <Header />
    <Blog caption="What we do" resource="You’re in great company"/>
    <MentorsContainer />
    <Blog caption="Resources" resource="Resources for student artists"/>
    <Blog resource="Resources for graduate artists"/>
    <Subscribe />
    <Footer />
  </Fragment>
)
