import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import products from "./data.json"
import Productdetails from './components/Productdetails/Productdetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: products.map((product) => (
        <Products key={product.id} products={product} />
      ))
    }, 
    {
      path:'/:id',
      element:<Productdetails products={products}/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
