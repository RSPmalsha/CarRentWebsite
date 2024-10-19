import React, { Fragment } from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Roters from '../../Routers/Roters';

const Layout = () => {
  return <Fragment>
        <Header/>
        <div>
            <Roters />
        </div>
        <Footer />
  </Fragment>
    
       
    
  
}

export default Layout
