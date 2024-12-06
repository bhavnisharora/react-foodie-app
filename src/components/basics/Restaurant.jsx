import { useState } from "react";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filteredItem = (category) => {
    const updatedList = Menu.filter((elem) => {
      return elem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      {/* <nav>
        <div>
          <button>breakfast</button>
          <button>lunch</button>
          <button>evening</button>
          <button>Dinner</button>
          <button onClick={() => setMenuData(Menu)}>All</button>
        </div>
      </nav> */}

      <div className="d-flex justify-content-center ">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              onClick={() => filteredItem("breakfast")}
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Breakfast
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              onClick={() => filteredItem("lunch")}
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Lunch
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              onClick={() => filteredItem("evening")}
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Evening
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              onClick={() => filteredItem("dinner")}
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Dinner
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              onClick={() => setMenuData(Menu)}
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              All
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          ></div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          ></div>
        </div>
      </div>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
