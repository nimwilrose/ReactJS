import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setproduct] = useState({});
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data.products)
        setproduct(data.products)
      })
  });
  return (
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>  
            <th>Category</th>
            <th>Images</th>
          </tr>
        </thead>        
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              {
                product.images.map(image => (
                  <img src={image} alt={product.title}  height={100} />
                ))
              }
            </tr>
          ))}
        </tbody>
        </table>
  )
}

export default App
