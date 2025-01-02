// refactoring into separate component

function Pagination() {
  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center">
      <div className="px-8">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{/* Show page number here */}</div>
      <div className="px-8">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
