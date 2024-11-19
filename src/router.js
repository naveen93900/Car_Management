import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProductCreate from './pages/ProductCreate';

const Router = () => (
  <Routes>
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/products" component={ProductList} />
    <Route path="/product/:id" component={ProductDetail} />
    <Route path="/create" component={ProductCreate} />
  </Routes>
);

export default Router;
