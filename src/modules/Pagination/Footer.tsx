import { usePaginationContext } from './PaginationContext';

const Footer = () => {
  const {
    currentPage,
    totalNumberOfPages,
    onClickPage,
    onClickNextPage,
    onClickPreviousPage,
    isFirstPage,
    isLastPage,
  } = usePaginationContext();
  return totalNumberOfPages ? (
    <div className="my-4 flex w-full flex-row items-center justify-center">
      <button
        className={`mx-3 cursor-pointer rounded-md border p-2 font-semibold hover:border-solid hover:border-blue-700 hover:text-blue-700 ${
          isFirstPage ? "cursor-not-allowed" : ""
        }`}
        onClick={onClickPreviousPage}
      >
        {"<"}
      </button>
      {Array.from<number>({ length: totalNumberOfPages }).map((item, index) => {
        const isActive = currentPage === index + 1;
        return (
          <div
            onClick={() => onClickPage(index + 1)}
            className={`mx-3 cursor-pointer rounded-md border p-2 font-semibold hover:border-solid hover:border-blue-700 ${
              isActive ? "" : "hover:text-blue-700"
            }  ${isActive && "bg-blue-700 text-white"}`}
            key={index + 1}
          >
            {index + 1}
          </div>
        );
      })}
      <button
        className={`mx-3 cursor-pointer rounded-md border p-2 font-semibold hover:border-solid hover:border-blue-700 hover:text-blue-700 ${
          isLastPage ? "cursor-not-allowed" : ""
        }`}
        onClick={onClickNextPage}
      >
        {">"}
      </button>
    </div>
  ) : null;
};

export default Footer;
