import React from 'react';
import './AddedArmy.css';

const AddedArmy = (props) => {
    const { name, country, picture } = props.specificArmy;
    return (
        <div className="border p-2 added-army">
            <div className="card mb-3" >
                <div className="row g-1 border border-danger">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start" alt="card" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-danger"><i>{name}</i></h5>
                            <h5 className="card-title text-danger"><i>{country}</i></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedArmy;