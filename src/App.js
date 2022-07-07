import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Feedback from './pages/Feedback';
import Model from './pages/Model';
import Service from './pages/Service';
import Baohanh from './pages/Baohanh';
import Baoduongsuachua from './pages/Baoduongsuachua';
import Phutungphukien from './pages/Phutungphukien';
import Chuongtrinh from './pages/Chuongtrinh';
import Trieuhoi from './pages/Trieuhoi';
import Detail from './pages/Detail';

import AdminLayout from './pages/AdminLayout';
import AdminCars from './pages/AdminCars';
import CarDetail from './pages/CarDetail';
import CarEdit from './pages/CarEdit';
import AdminUser from "./pages/AdminUser";
import UserDetail from "./pages/UserDetail";
import UserEdit from "./pages/UserEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='model/:name' element={<Model />} />
          <Route path='service' element={<Service />} />
          <Route path='baohanh' element={<Baohanh />} />
          <Route path='baoduongsuachua' element={<Baoduongsuachua />} />
          <Route path='phutungphukien' element={<Phutungphukien />} />
          <Route path='chuongtrinh' element={<Chuongtrinh />} />
          <Route path='trieuhoi' element={<Trieuhoi />} />
          <Route path='detail/:id' element={<Detail />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />} >
          <Route index element={<AdminCars />} />
          <Route path='/admin/:id' element={<CarDetail />} />
          <Route path='/admin/caredit/:id' element={<CarEdit />} />
          <Route path='/admin/adminuser' element={<AdminUser/>}/>
          <Route path='/admin/adminuser/:id' element={<UserDetail/>}/>
          <Route path='/admin/useredit/:id' element={<UserEdit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}