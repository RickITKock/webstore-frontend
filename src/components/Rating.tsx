import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  value: number;
  text: string;
}

const Rating: React.FC<Props> = ({ value, text }) => {
  return (
    <div>
      <span>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      {text}
    </div>
  );
};

export default Rating;
