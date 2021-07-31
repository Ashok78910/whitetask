import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import StudentScreen from './screens/StudentScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path = '/' component={HomeScreen} exact />
          <Route path = '/student/:id' component={StudentScreen}/>
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
