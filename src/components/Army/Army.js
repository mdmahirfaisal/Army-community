import React from 'react';
import './Army.css'

const Army = (props) => {

    const { name, _id, age, picture, salary, country } = props.army;

    return (
        ///////// all army displays////////

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow-lg card-item ">
                <img src={picture} className="card-img rounded" alt="" />
                <div className="card-body bg-white ">
                    <h5 className="card-title  fw-bold"><span className="fw-bold text-danger">NAME:</span> {name}</h5>
                    <p className="card-text fw-bold"><span className="fw-bold text-danger">AGE:</span> {age}</p>
                    <p className="card-text fw-bold"><span className="fw-bold text-danger">ID:</span> {_id}</p>
                    <p className="card-text fw-bold"><span className="fw-bold text-danger">SALARY:</span> {salary}</p>
                    <p className="card-text fw-bold"><span className="fw-bold text-danger">COUNTRY:</span> {country}</p>
                    <div className="text-center pt-5">

                        {/* react font awesome install hote somossa hocche tai bangla sistem a icon add korlam   Soory  */}

                        <button onClick={() => props.handleAddButton(props.army)} className="btn btn-outline-danger add-btn "><i className="fas fa-shopping-cart"></i> Add to cart</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Army;