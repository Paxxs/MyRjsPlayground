// import { Grid } from '@fluentui/react-northstar';
import React, { Component } from 'react'
import ListBody from './components/ListBody';
import SearchHeader from './components/SearchHeader';
// import { Segment } from '@fluentui/react-northstar'
import { DefaultEffects, Stack } from '@fluentui/react';

const itemAlignmentsStackTokens = {
  childrenGap: 5,
  padding: 10,
};

class App extends Component {
  render() {
    return (
      <Stack tokens={itemAlignmentsStackTokens} style={{
        boxShadow: DefaultEffects.elevation8,
        margin: 30,
        padding: 0
      }}>
        <Stack.Item align="stretch">
          <SearchHeader />
        </Stack.Item>
        <Stack.Item align="stretch">
          <ListBody />
        </Stack.Item>
      </Stack>
    )
  }
}

export default App;
