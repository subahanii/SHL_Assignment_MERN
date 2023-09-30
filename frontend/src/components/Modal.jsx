import React, { useState } from 'react'

function Modal({ele}) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
  return (
    <div >
      <button className="btn btn-primary" onClick={toggleModal}>
        Open Modal
      </button>

      {/* Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`}  tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{'backgroundColor':"rgba(194, 227, 234, 0.667)"}}>
            <div className="modal-header" style={{'backgroundColor': '#357662'}}>
              <h5 className="modal-title" style={{'color':'red'}}>{ele.title}</h5>
              <button type="button" className="close" onClick={toggleModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div className="card">
                  <div className="card-body">
                  
                    <h5 className="card-subtitle mb-2 text-muted">
                      <b>Technologies:{" "}</b>
                      <span className="text">{ele.technologies ? ele.technologies.join(",") : ""}</span>
                    </h5>
                    <h5 className="card-subtitle mb-2 text-muted">
                      <b>Frontend Skill:{" "}</b>
                      <span className="text">{ele.frontend_skill ? ele.frontend_skill.join(",") : ""}</span>
                    </h5>
                    <h5 className="card-subtitle mb-2 text-muted">
                      <b>Backend Skill:{" "}</b>
                      <span className="text">{ele.backend_skill ? ele.backend_skill.join(",") : ""}</span>
                    </h5>
                    <h5 className="card-subtitle mb-2 text-muted">
                      <b>Database Skill:{" "}</b>
                      <span className="text">{ele.database_skill ? ele.database_skill.join(",") : ""}..</span>
                    </h5>
                    <h5 className="card-subtitle mb-2 text-muted">
                      <b>Infrastructure Skill:{" "}</b>
                      <span className="text">{ele.infrastructure_skill
                        ? ele.infrastructure_skill.join(",")
                        : ""}
                      </span>
                    </h5>
                    <p className="card-subtitle mb-2 text-muted">
                      <h5>Availability:</h5>
                      <span className="text">{ele.availablity}</span>
                    </p>
                    
                    
                  </div>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                Close
              </button>
             
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}
    </div>

  )
}

export default Modal
