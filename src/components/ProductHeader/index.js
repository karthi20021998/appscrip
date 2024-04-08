import "./index.css";

const ProductHeader = (props) => {
  const { sortbyOptions, updateActiveOptionId, activeOptionId } = props;

  const onChangeSortby = (event) => {
    updateActiveOptionId(event.target.value);
  };

  return (
    <div className="product-header-container">
      <h4 className="sort-by-tag">SORT BY</h4>
      <select
        value={activeOptionId}
        onChange={onChangeSortby}
        className="sort-by-card"
      >
        {sortbyOptions.map((eachOption) => (
          <option
            key={eachOption.optionId}
            value={eachOption.optionId}
            className="sort-by-options"
          >
            {eachOption.displayText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductHeader;
