import { FiChevronRight } from "react-icons/fi";

export const Carouselright = ({ carousel }) => {
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };

  return (
    <button
      className="px-1 hover:text-gray-400 duration-300"
      onClick={handleRightClick}
    >
      {<FiChevronRight size={32} />}
    </button>
  );
};
