import { Card, CardImg } from "react-bootstrap";

interface Props {
  price: number;
  name: string;
  image: string;
}

const Product: React.FC<Props> = (product) => {
  return (
    <Card className="my-3 p-3 rounded">
      <CardImg src={product.image} />
      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
