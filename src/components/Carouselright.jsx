import { FiChevronRight } from "react-icons/fi";

export const Carouselright = ({ handleRightClick }) => {
  return (
    <button
      className="px-1 hover:text-gray-400 duration-300"
      onClick={handleRightClick}
    >
      {<FiChevronRight size={32} />}
    </button>
  );
};
