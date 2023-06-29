import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

interface ProductType {
  _id: string;
  price: number;
  rating: number;
  name: string;
  numReviews: string;
  image: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        if (response && response.data) {
          setProducts(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                rating={product.rating}
                numReviews={product.numReviews.toString()}
                price={product.price}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
