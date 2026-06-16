function Header({
  nameValue,
  priceValue,
  onNameChange,
  onPriceChange,
  onAdd,
  onKeyDown,
}) {
  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-sm">
            <input
              type="text"
              id="nameInput"
              className="form-control"
              placeholder="Enter service name"
              value={nameValue}
              onChange={onNameChange}
              onKeyDown={onKeyDown}
            />
          </div>
          <div className="col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
              value={priceValue}
              onChange={onPriceChange}
              onKeyDown={onKeyDown}
            />
          </div>
          <div className="col-sm">
            <button type="button" className="btn btn-warning kg-btn" onClick={onAdd}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
