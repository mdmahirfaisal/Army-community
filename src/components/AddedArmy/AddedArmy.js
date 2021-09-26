import React from 'react';

const AddedArmy = (props) => {
    const { name, country, picture } = props.specificArmy;
    return (
        <div className="border p-2">
            <div className="card mb-3" >
                <div className="row g-1">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start" alt="card" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h5 className="card-title">{country}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedArmy;