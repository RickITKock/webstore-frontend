import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { products } from "./products";

function HomePage() {
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
}
export default HomePage;
