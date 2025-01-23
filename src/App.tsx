import { GlobalCss } from './styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Hero from './components/Hero'
import DishGrid from './components/DishGrid'
import Footer from './components/Footer'
import ImagePage from './components/ImagePage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 16px;
`

function App() {
  return (
    <Router>
      <GlobalCss />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <DishGrid />
                <Footer />
              </>
            }
          />
          <Route path="/image-page" element={<ImagePage />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
