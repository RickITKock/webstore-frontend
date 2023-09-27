import axios from "axios";
import { useEffect, useState } from "react";
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
import { PRODUCT_URL } from "../constants";

interface ProductType {
  _id: string;
  price: number;
  rating: number;
  countInStock: number;
  name: string;
  numReviews: string;
  image: string;
  description: string;
}

const ProductPage: React.FC = () => {
  const { id: productId } = useParams();
  const [productDetails, setProductDetails] = useState<ProductType>();

  useEffect(() => {
    const url = `${PRODUCT_URL}/${productId}`;
    const headers = {
      accept: "text/plain",
    };

    axios
      .get(url, { headers })
      .then((res) => {
        const { data } = res;
        setProductDetails(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Link className="btn btn-warning my-3" to="/">
        Go Back
      </Link>
      {productDetails && (
        <Row>
          <Col md={5}>
            <Image src={productDetails.image} alt={productDetails.name} />
          </Col>
          <Col md={4}>
            <Card className="py-5 border-0 rounded-5">
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{productDetails.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={productDetails.rating}
                    text={`${productDetails.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price: {productDetails.price}</ListGroupItem>
                <ListGroupItem>
                  Desciption: {productDetails.description}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="py-5 border-0 rounded-5">
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${productDetails.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {productDetails.countInStock > 0
                          ? "In Stock"
                          : "Out Of stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={productDetails.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default ProductPage;
