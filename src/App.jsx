import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='max-w-[1024px] px-4 mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App