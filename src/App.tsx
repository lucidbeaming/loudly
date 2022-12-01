import React from 'react'
import Container from 'react-bootstrap/Container'
import TrendingSongs from './components/trendingsongs'
import './styles/styles.css';

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <h1>Loudly technical task</h1>
      </header>
      
      <TrendingSongs />

    </Container>
  )
}

export default App
