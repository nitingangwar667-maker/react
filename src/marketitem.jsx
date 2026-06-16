const marketItems = ({ marketitems, onClick }) => {
  return (
    <div className="container marketitems">
      {marketitems.map((item, index) => (
        <div key={index}>
          <div className="row kg-row">
            <div className="col-sm">{item.name}</div>
            <div className="col-sm">{item.price}</div>
            <div className="col-sm">
              <button type="button" className="btn btn-warning kg-btn" 
              onClick={onClick}>
                done
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default marketItems;
