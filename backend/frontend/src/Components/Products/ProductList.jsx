import { useState, useEffect } from 'react'
import axiosInstance from "../../config";
import { Link } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../Body/Loading/Loading";
import './_product.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (req, res) => {
      try {
        res = await axiosInstance.get('/api/products');
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  const deleteProduct = async (id) => {
    try {
      console.log(`Item ${id} Deleted`)
      await axiosInstance.delete(`/product/${id}`);

      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }

  console.table(products)

  return (
    <div>
      <h1 className="h-1 addProduct"> Add Books </h1>

      <Link
        to="/add"
        className="addHome"
        style={{ color: "inherit", textDecoration: "none" }}>
        Add New Product
      </Link>

      <div className="block">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="pad-n">
                <h3>
                  <b>
                    {product.title} 
                    {/* qty:{product.qty} */}
                  </b>
                </h3>
              </div>

              <div className="pad-n">
                <img className="product-cover" src={product.cover} alt="" />
              </div>

              <div className="pad-n">
                {/* <h3> */}
                  <b><span>Price: ${product.price}</span></b>
                {/* </h3> */}
              </div>

              <div className="pad-n">
                {/* <h3><b>DESCRIPTION & COST</b></h3> */}
                <p>{product.desc}</p>
              </div>

              <div className="pad-n">
                <button className="delete" onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>

              <button className="update">
                <Link
                  to={`/edit/${product.id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Update
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(ProductList, {
  onRedirecting: () => <Loading />,
})
