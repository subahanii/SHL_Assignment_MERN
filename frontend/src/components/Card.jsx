import React from "react";
import Modal from "./Modal";

function Card({ data, loading }) {
  console.log("lllll", data);
  return (
    <div className="container">
        <hr/>
        {data.length?<b style={{'color':'green'}}>Total item found:{data.length}</b>:""}
      <div className="row">
        {!data.length ? (
          <h5 >data not found </h5>
        ) : (
          data.map((ele) => {
            return (
                <div className="col-sm-3 mt-2">
                  <hr/>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{'color':"rgb(0 184 222) "}}>{ele.title}</h5>
                    <hr />
                    <h6 className="card-subtitle mb-2 text-muted">
                      <b>Technologies:{" "}</b>
                      <span className="text">{ele.technologies ? ele.technologies[0] : ""}...</span>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <b>Frontend Skill:{" "}</b>
                      <span className="text">{ele.frontend_skill ? ele.frontend_skill[0] : ""}...</span>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <b>Backend Skill:{" "}</b>
                      <span className="text">{ele.backend_skill ? ele.backend_skill[0] : ""}...</span>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <b>Database Skill:{" "}</b>
                      <span className="text">{ele.database_skill ? ele.database_skill[0] : ""}..</span>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <b>Infrastructure Skill:{" "}</b>
                      <span className="text">{ele.infrastructure_skill
                        ? ele.infrastructure_skill[0]
                        : ""}
                      ...</span>
                    </h6>
                    <p className="card-subtitle mb-2 text-muted">
                      <h6><b>Availability:</b></h6>
                      <span className="text">{ele.availablity.substring(0, 3) + "..."}</span>
                    </p>
                    <hr />
                    <Modal ele={ele} />
                    
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
