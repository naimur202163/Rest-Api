import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
export default function ProductScreen(props) {
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  return (
    <div className="container">
      <Link to="/">Back to Home</Link>

      {loading ? (
        <div>Loading.....</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="row">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </li>
              <li>price: ${product.price}</li>
              <li>
                Description:
                <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card  card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>price</div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>status </div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock </span>
                      ) : (
                        <span className="error">Not in Stock</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="button primary   ">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
