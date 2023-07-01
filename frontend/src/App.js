
import Nav from './component/Nav';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Register from './component/Register';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import Addproducts from './component/Add-products';
import Productlist from './component/Productlist';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Productlist/>}/>
        <Route path='/add' element={<Addproducts/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/logout' element={<h1>logout component</h1>}/>
        <Route path='/profile' element={<h1>profile component</h1>}/>
        </Route>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
