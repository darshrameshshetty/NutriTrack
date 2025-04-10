
import './App.css';
import Navbar from './Components/Navi/Navbar';
import Hero from './Components/hriao/Hero';
import Feature from './Components/features/Feature';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import  Login from './Components/Login/Login';
import Upload from './Components/UploadPage/Upload'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Feature />
            <About />
            <Footer />
          </>
        }
      />
      <Route path='/log' element={<Login/>}/>
      <Route path='/upl' element={<Upload/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
