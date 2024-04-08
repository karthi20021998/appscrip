import { GrFavorite } from "react-icons/gr";
import "./index.css";

const ProductCard = (props) => {
  const { productDetails, toggleIsFavorite, isLiked } = props;
  const { id, image, title, price } = productDetails;

  const onClickFavoriteButton = () => toggleIsFavorite(id);

  const likedClassName = isLiked ? "liked-button" : "";

  return (
    <li className="single-product-container">
      <img src={image} alt="product-img" className="product-image" />
      <h1 className="product-title">{title}</h1>
      <div className="price-container">
        <p className="product-price">Price : {price} $</p>
        <button
          type="button"
          className="favorites-button"
          onClick={onClickFavoriteButton}
        >
          <GrFavorite className={`${likedClassName}`} />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
