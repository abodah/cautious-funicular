import React from 'react';
import styled from '@emotion/styled';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Spinner from 'components/Spinner';
import LoginComponent from '../Auth/Login/index';
import HomeComponent from 'components/Home';

/* const Wrapper = styled.div`
  padding: 20px;
`;

<Wrapper>
<h1>React Starterkit</h1>
{dataLoading && <Spinner />}
{data ? data.length : <button type="button" onClick={loadData}>load data</button>}
</Wrapper>

const data = useStoreState((state) => state.app.data);
  const dataLoading = useStoreState((state) => state.app.dataLoading);
  const loadData = useStoreActions((actions) => actions.app.loadData);*/

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      dataLoading:false
    }
  }

  render(){
    
    return (
      <>
        {this.state.dataLoading && <Spinner />}
        <HomeComponent/>
      </>
    )
  }
};

export default App;
