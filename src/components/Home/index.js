import React from 'react';
import styled from '@emotion/styled';

import Footer from '../Footer/index';
import MnNavigationComponent from '../Navigation/main-navigation';

const Wrapper = styled.div`
padding: 20px;
margin-top: 88px;
`;


class HomeComponent extends React.Component {
  
  constructor(){
    super();
    this.state={
      dataLoading:false
    }
  }

  render(){
    
    return (
      <>
        <MnNavigationComponent/>
        <Wrapper>
           Voici le contenu de la page, tout vas se passer ici
        </Wrapper>
        <Footer/>
      </>
    )
  }
}

export default HomeComponent;