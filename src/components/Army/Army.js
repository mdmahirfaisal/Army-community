import React from 'react';
import './Army.css'

const Army = (props) => {
    // console.log(props);

    const { name, _id, age, picture, salary, country } = props.army;

    return (
        ///////// all army displays////////

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow rounded card-bg">
                <img src={picture} className="card-img rounded" alt="" />
                <div className="card-body bg-white text-center">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Id: {_id}</p>
                    <p className="card-text">Salary: {salary}</p>
                    <p className="card-text">Country: {country}</p>
                    <div className="text-center pt-5">
                        <button onClick={() => props.handleAddButton(props.army)} className="btn btn-outline-danger w-75 add-btn"><i class="fas fa-shopping-cart"></i> Add to cart</button>
                    </div>
                </div>





            </div>

        </div>
    );
};

export default Army;