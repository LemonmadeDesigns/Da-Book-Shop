/* eslint-disable react-hooks/exhaustive-deps */
import axiosInstance from "../../config";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bulma-components';

// BUTTON IN REACT FROM BULMA
import 'bulma/css/bulma.min.css';
import './_product.css'

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [cover, setCover] = useState('');
  const [error, setError] = useState(false)

  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axiosInstance.patch(`/api/products/${id}`, {
      title: title,
      desc: desc,
      price: price,
      cover: cover
    });
    navigate("/products");
  }

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.put(`/api/products/${id}`);
      navigate("/products");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div id="product-edit">
      <h1 id="new-book">Update Book</h1>
      <form onSubmit={updateProduct}>
        <div className="field">
          <label className="label"> Title: </label>
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label"> Description: </label>
          <input
            className="input"
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label"> Price: </label>
          <input
            className="input"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label"> Cover: </label>
          <input
            className="input"
            type="text"
            placeholder="Cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>

        <div className="field">
          <Button className="button is-primary update-update">Update</Button>
          {error && "Something went wrong!"}
          <Button to="/Products" className="button cancel">Cancel</Button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
