import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";

interface ProductType {
  _id: string;
  price: number;
  rating: number;
  name: string;
  numReviews: string;
  image: string;
}

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error.toString()}</div>
      ) : (
        <Row>
          {products.map((product: ProductType) => (
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
      )}
    </>
  );
};

export default HomePage;
