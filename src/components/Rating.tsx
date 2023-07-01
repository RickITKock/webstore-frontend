import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  value: number;
  text: string;
}

const Rating: React.FC<Props> = ({ value, text }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 0.5;
    return (
      <span key={starValue}>
        {value >= starValue ? (
          <FaStar />
        ) : value >= starValue - 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div className="rating">
      {stars}
      <span className="rating-text">{text && " " + text}</span>
    </div>
  );
};

export default Rating;
