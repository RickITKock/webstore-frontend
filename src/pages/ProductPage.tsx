import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { products } from "./products";

// type Product = {
//   _id: string;
//   price: number;
//   rating: number;
//   name: string;
//   numReviews: string;
//   image: string;
// }

const ProductPage: React.FC = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  console.log(product);

  return (
    <>
      <Link className="btn btn-warning my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product!.image} alt={product!.name} />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product!.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product!.rating}
                text={`${product!.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: {product!.price}</ListGroupItem>
            <ListGroupItem>Desciption: {product!.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product!.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product!.countInStock > 0 ? "In Stock" : "Out Of stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product!.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ProductPage;
