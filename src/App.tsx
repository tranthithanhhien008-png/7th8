import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from './containers/Defaultlayout';
import DamCuoi from './viewstrangphu/Damcuoi';
import Aodaicuoi from './viewstrangphu/Aodaicuoi';
import Login from './containers/Login';
import Vuongmien from "./viewstrangphu/Vuongmien";
import Khanvoan from "./viewstrangphu/Khanvoan";
import Giaycuoi from "./viewstrangphu/Giaycuoi";
import { UserProvider } from "./component/UserContext";
import ProductDetailPage from "./viewstrangphu/trangchitiet";
import Home from "./containers/Home";
import CartPage from "./component/CartPage";
import LienHe from "./viewstrangphu/lienhe";
function App() {
  return (
    <UserProvider>
        <Routes>
          <Route path="/trangchitiet" element={
            <DefaultLayout child={<ProductDetailPage />}/>
          } />
          <Route path="/Damcuoi" element={<DamCuoi />} />
          <Route path="/Khanvoan" element={<Khanvoan />} />
          <Route path="/Giaycuoi" element={<Giaycuoi />} />
          <Route path="/Vuongmien" element={<Vuongmien />} />
          <Route path="/Aodaicuoi" element={<Aodaicuoi />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/lienhe" element={<LienHe/>}/>
          <Route path="/*" element={<DefaultLayout  child={<Home/>}/>} />
          <Route path="/giohang" element={<DefaultLayout  child={<CartPage/>}/>} />
        </Routes>
    </UserProvider>
  );
}

export default App;
