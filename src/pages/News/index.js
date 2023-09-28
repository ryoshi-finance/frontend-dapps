import React from 'react';
import Header from '../Partials/header';
import Subheader from '../Partials/subheader';
import Main from './main';
import Footer from '../Partials/footer';
import TopPairs from '../Partials/toppairs';
import Decoration from '../Partials/decoration';

function News(){

  return (<>
      <Decoration />
      <Header />
      <Subheader />
      <TopPairs />
      <Main />
      <Footer />
      
  </>)


}

export default News;