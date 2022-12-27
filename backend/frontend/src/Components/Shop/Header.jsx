// import Profile from '../Profile/Profile';

// CSS
import "./shop.css"

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <div id="counter" className="row center block">
      {/* <span>
        <h1 className="h-1" id="products">Products</h1>
      </span> */}
      <div className="Counter">
        <a href="../ShoppingCart/">
          Cart
          {countCartItems ? (
            <button className="badge">  {countCartItems}
            </button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </div>
  );
}
