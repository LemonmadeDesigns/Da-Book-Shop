import { useState } from 'react'
import axiosInstance from "../../config";
import { Link, useNavigate } from 'react-router-dom';

// BUTTON IN REACT FROM BULMA
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

const AddProduct = () => {

  const [
    // product, 
    setProduct
  ] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  });

  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/products')
      navigate("/products");
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div id="product-add">
      <h1 id="new-book">Add New Book</h1>
      <div className="field-0">
        <div className="field">
        <label className="label"> Title: </label>
          <input
            className="input"
            type="text"
            placeholder="Book Title"
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className="field">
        <label className="label"> Description: </label>
          <textarea
            className="input"
            style={{"padding": "1em", "margin": ".5em 0 .15em"}}
            rows={5}
            type="text"
            placeholder="Book Desc"
            name="desc"
            onChange={handleChange}
          />
        </div>

        <div className="field">
        <label className="label"> Price: </label>
          <input
            className="input"
            type="number"
            placeholder="Book Price"
            name="price"
            onChange={handleChange}
          />
        </div>

        <div className="field">
        <label className="label"> Cover: </label>
          <input
            className="input"
            type="text"
            placeholder="Book Cover"
            name="cover"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <Button className="button update-update" onClick={saveProduct}>Add</Button>
        {error && "Something went wrong!"}
        <Link to="/products" className="button cancel">Cancel</Link>
        {/* <Link to="/products">See All Books</Link> */}
      </div>

    </div>
  )
}

export default AddProduct
