import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from './containers/Defaultlayout';
import DamCuoi from './viewstrangphu/Damcuoi';
import Aodaicuoi from './viewstrangphu/Aodaicuoi';
import Login from './containers/Login';
import Register from './containers/Register';
import Vuongmien from "./viewstrangphu/Vuongmien";
import Khanvoan from "./viewstrangphu/Khanvoan";
import Giaycuoi from "./viewstrangphu/Giaycuoi";
import { UserProvider } from "./component/UserContext";
import ProductDetailPage from "./viewstrangphu/trangchitiet";

function App() {
  return (
    <UserProvider>
        <Routes>
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/Damcuoi" element={<DamCuoi />} />
          <Route path="/Khanvoan" element={<Khanvoan />} />
          <Route path="/Giaycuoi" element={<Giaycuoi />} />
          <Route path="/Vuongmien" element={<Vuongmien />} />
          <Route path="/Aodaicuoi" element={<Aodaicuoi />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/*" element={<DefaultLayout />} />
          
        </Routes>
    </UserProvider>
  );
}

export default App;
