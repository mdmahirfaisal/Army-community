import React from 'react';
import './Total.css';

const Total = (props) => {
    const { totalArmy } = props;
    console.log(props.totalArmy);
    let total = 0;
    for (const army of totalArmy) {
        total = total + army.salary;
    }

    return (
        <>
            <div className="py-3">
                <h3>Army added ( {props.totalArmy.length} )</h3>
                <h4>Total Salary: $ {total}</h4>
            </div>
            <div>
                <h4>this is visible and in visible</h4>
            </div>
        </>
    );
};

export default Total;