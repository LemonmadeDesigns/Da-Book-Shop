import Product from './Product';

// CSS
import "./shop.css"

function Main(props) {
  const { cartItems, products, onAdd, onRemove } = props;
  return (
    <div className="block">
 
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            item={cartItems.find((x) => x.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Product>
        ))}
      </div>
    </div>
  );
}

export default Main