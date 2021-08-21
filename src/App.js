import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import BlogAdmin from "./components/admin/BlogAdmin";
import Blog from "./components/blog/Blog";
import PostInner from "./components/blog/PostInner";
import MainScreen from "./screens/MainScreen";
import ShopAdmin from "./components/admin/ShopAdmin";
import ProductsPage from "./components/products/ProductsPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainScreen} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin/blog" component={BlogAdmin} />
        <Route path="/admin/shop" component={ShopAdmin} />
        <Route path="/blog" component={Blog} />
        <Route path="/postInner/:id" component={PostInner} />
        <Route path="/products_page" component={ProductsPage} />
      </Router>
    </div>
  );
}

export default App;
