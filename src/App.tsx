import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.tsx'
import { Work } from './routes/Work'
import { Personal } from './routes/Personal'
import { Money } from './routes/Money'
import { Health } from './routes/Health'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Work />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/money" element={<Money />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
