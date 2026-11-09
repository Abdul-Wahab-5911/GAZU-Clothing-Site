import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Men from './Men/Men'
import Women from './Women/Women'
import Kids from './Kids/Kids'
import Feedback from './Feedback/Feedback'

function App() {
  return (
    <Router>
      <div className="[zoom:0.8] flex min-h-screen w-full flex-col bg-[#ededed] font-sans leading-normal text-[#111] antialiased">
        <Navbar />
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
