import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

interface Props {
  _id: string;
  price: number;
  rating: number;
  name: string;
  numReviews: string;
  image: string;
}

const Product: React.FC<Props> = (product) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/productsd/${product._id}`}>
        <CardImg src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/productsd/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
