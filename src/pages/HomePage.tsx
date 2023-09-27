import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { PRODUCT_URL } from "../constants";

interface ProductType {
  _id: string;
  price: number;
  rating: number;
  name: string;
  numReviews: string;
  image: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    const url = PRODUCT_URL;
    const headers = {
      accept: "text/plain",
    };

    axios
      .get(url, { headers })
      .then((res) => {
        const { data } = res;
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product: ProductType) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product
                _id={product._id}
                image={product.image}
                name={product.name}
                rating={product.rating}
                numReviews={product.numReviews.toString()}
                price={product.price}
              />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomePage;
