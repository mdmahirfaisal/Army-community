import React from 'react';
import AddedArmy from '../AddedArmy/AddedArmy';
import './Total.css';

const Total = (props) => {
    const { totalArmy } = props;
    console.log(totalArmy);
    let total = 0;
    for (const army of totalArmy) {
        total = total + army.salary;
    }

    return (
        <>
            <div className="py-3">
                <h3>Army added ( {totalArmy.length} )</h3>
                <h4>Total Salary: $ {total}</h4>
            </div>
            <div>
                {
                    totalArmy.map(specificArmy => <AddedArmy key={specificArmy._id} specificArmy={specificArmy}></AddedArmy>)
                }
            </div>
        </>
    );
};

export default Total;