import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3 mx-5 my-5 ">
        {menuData.map((elem) => (
          <div
            className="card shadow-sm py-4"
            style={{ width: "18rem" }}
            key={elem.id}
          >
            <img className="card-img-top" />
            <div className="card-body">
              <div className="mb-4">
                <span className=" py-1 px-2 border border-dark rounded-circle">
                  {elem.id}
                </span>
              </div>
              <h5 className="mt- 2 card-title text-danger text-capitalize fw-bold">
                {elem.category}
              </h5>
              <p className="display-6 text-capitalize">{elem.name}</p>
              <p className="card-text">
                <span className="fs-5 fw-bold"> ₹ {elem.price} </span>
              </p>
            </div>
            <div
              className="btn btn-lg my-2 fs-6 btn-outline-dark rounded-pill"
              style={{ width: "150px" }}
            >
              Order Now
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCard;
