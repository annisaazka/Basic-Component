import Header from './pages/header';
import SideBar from './pages/sidebar';
import Products from './pages/products';
import Descprod from './pages/descprod';
import Users from './pages/users';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <SideBar/>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/product{id}" element={<Descprod />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
