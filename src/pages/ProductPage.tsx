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
import Loader from "../components/Loader";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";

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
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  // useEffect(() => {
  //   axios
  //     .get(`/api/products/${productId}`)
  //     .then((response) => {
  //       if (response && response.data) {
  //         setProduct(response.data);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, [productId]);

  return (
    <>
      <Link className="btn btn-warning my-3" to="/">
        Go Back
      </Link>
      {isLoading && <Loader />}
      {error && error}
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
