import React from "react";

function Card({ data, loading }) {
  console.log("lllll", data);
  return (
    <div className="container">
        <hr/>
        {data.length?<b>Total item found:{data.length}</b>:""}
      <div className="row">
        {!data.length ? (
          <p>data not found </p>
        ) : (
          data.map((ele) => {
            return (
                <div className="col-sm-3 mt-2">
                  <hr/>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Technologies:{" "}
                      {ele.technologies ? ele.technologies[0] : ""}...
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      frontend_skill:{" "}
                      {ele.frontend_skill ? ele.frontend_skill[0] : ""}...
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      backend_skill:{" "}
                      {ele.backend_skill ? ele.backend_skill[0] : ""}...
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      database_skill:{" "}
                      {ele.database_skill ? ele.database_skill[0] : ""}..
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      infrastructure_skill:{" "}
                      {ele.infrastructure_skill
                        ? ele.infrastructure_skill[0]
                        : ""}
                      ...
                    </h6>
                    <p className="card-text">
                      <h6>Availability:</h6>
                      {ele.availablity.substring(0, 3) + "..."}
                    </p>
                    <a href="#" className="card-link">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Card;
