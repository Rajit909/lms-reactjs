import { useState, useEffect } from "react";
import { getAllProductUsers } from "../../Api/SuperDB";

const Package = () => {
  const [packages, setPackages] = useState(null);

  useEffect(() => {
    getAllProductUsers((productUsers) => {
      // console.log("packages", productUsers);
      setPackages(productUsers);
    });
  }, []);

  let ui = null;
  if (packages === null) {
    ui = <p>Loading!!!</p>;
  } else if (packages.length === 0) {
    ui = <p>No Users Bought The Packages Yet!!!</p>;
  } else {
    ui = packages.map((pac) => (
      <details className="table-list" key={pac.id}>
        <summary className="row sum">
          <p>{pac.name}</p>
          <p>{pac.phone}</p>
          <p>{pac.domain}</p>
          <p>{pac.package.name}</p>
          <p>
            {pac.package.status === "ongoing" ? (
              <span>
                <b>On Going</b>
              </span>
            ) : (
              <span className="expired">
                <b>Expired</b>
              </span>
            )}
          </p>
        </summary>
        <h6>
          adalah contoh teks atau dummy dalam industri percetakan dan penataan
          huruf atau typesetting
        </h6>
      </details>
    ));
  }

  return (
    <div className="row table-head m-0">
      <div className="col-md-12 table-left">
        {/* <div className="dropdown">
          <button className="dropbtn">Package 1</button>
          <div className="dropdown-content">
            <a href="/basic.html">Basic</a>
            <a href="/secondary.html">Secondary</a>
            <a href="/package.html">Permium</a>
          </div>
        </div> */}
        <div className="row table">
          <p>Name</p>
          <p>Phone</p>
          <p>Domain Name</p>
          <p>Package Name</p>
          <p>Status</p>
        </div>
        {ui}
      </div>
    </div>
  );
};

export default Package;
