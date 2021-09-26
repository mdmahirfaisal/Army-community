import React, { useEffect, useState } from 'react';
import Army from '../Army/Army';
import Total from '../Total/Total';
import './Armys.css';

const Armys = () => {
    const [armys, setArmys] = useState([]);

    const [totalArmy, setTotalArmy] = useState([]);
    // console.log(totalArmy);


    useEffect(() => {
        fetch('./armys.json')
            .then(res => res.json())
            .then(data => setArmys(data))
    }, []);

    ////// handle add to total
    const handleAddButton = (army) => {
        const newArmy = [...totalArmy, army]
        setTotalArmy(newArmy)
    }

    return (
        //    all army details 
        <div className="mx-2 row g-col-6">
            <div className="col-md-9 ">
                <div className="armys-container">

                    <div className="row p-3">
                        {
                            armys.map(army => <Army
                                key={army._id}
                                army={army}
                                handleAddButton={handleAddButton}
                            ></Army>)

                        }
                    </div>
                </div>
            </div>

            {/* total army details  */}
            <div className="col-md-3 ">
                <div className="armys-container">

                    <Total
                        totalArmy={totalArmy}
                    ></Total>

                </div>
            </div>
        </div>
    );
};

export default Armys;