import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './container/Header';
import ProductList from './container/ProuductList';
import ProductDetail from './container/ProductDeatail';
function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes >
            <Route path="/" exact element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route>404 Not Found!</Route>
          </Routes >
          
      </Router>
        
    </div>
  );
}

export default App;
