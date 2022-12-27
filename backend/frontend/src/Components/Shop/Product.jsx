import "./shop.css"

export default function Product(props) {
  const { item, product, onAdd, onRemove } = props;
  return (
    <div className="card">
      <div className="pad-n">
        <h3 className="headliner">{product.title}</h3>
      </div>
      <div className="pad-n">
        <img className="product-cover" src={product.cover} alt={product.title} />
      </div>
      <div className="pad-n font-sz-p">
        <p>{product.desc}</p>
      </div>

      {/* <h3>{product.name}</h3> */}

      <div className="pad-n font-sz">
        Starting from <span className="red"> ${product.price}</span>
      </div>
      <div className="pad-n">
        {item ? (
          <div id="add-remove">
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>
        ) : (
          <button id="addToCartBtn" onClick={() => onAdd(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}