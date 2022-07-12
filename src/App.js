
import './App.css';
// import Header from './ComponentFile/HeaderFile/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AboutUs from './ComponentFile/AboutUsFile/AboutUs';
// import Prodeuct from './ComponentFile/ProductFile/Prodeuct';
// import Footer from './ComponentFile/FooterFIle/Footer';
import { Routes, Route } from 'react-router-dom';
// import AboutUs from './ComponentFile/AboutUsFile/AboutUs';
// import Prodeuct from './ComponentFile/ProductFile/Prodeuct';
import Footer from './ComponentFile/FooterFIle/Footer';
import Registation from './ComponentFile/RegisterFile/Registation';
import Home from './ComponentFile/HomeFile/Home';
import Header from './ComponentFile/HeaderFile/Header';
// import Registation from './ComponentFile/RegisterFile/Registation';

function App() {
  return (
    <div className="App">

      <Home></Home>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/registation" element={<Registation></Registation>}></Route>
        <Route path="/login" element={<Registation></Registation>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
