import React from 'react'

import TeamsInfo from './components/TeamsInfo'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <>
      <TeamsInfo/>
      </>
    )
  }
}

export default App