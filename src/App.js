import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services/Services';
import Services2 from './components/Services/Services2';
import Services3 from './components/Services/Services3';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import Blog from './components/Blog/Blog';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services2' element={<Services2/>} />
        <Route path='/services3' element={<Services3/>} />
        <Route path='/about-us'   element={<Aboutus/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact-us' element={<Contactus/>} />
        
       
        


      </Routes>
     
     
      <Footer />
    </div>
  );
}

export default App;
