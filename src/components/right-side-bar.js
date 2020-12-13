import React from 'react';
import RightPanalCard from './right-panel';
import '../css/RightSideBar.css'
const RightSideBar = () => {
   
    return (
        <div className="right-sidebar">
            <label className="active"><i className="bolt icon"></i>Actions</label>
            <div className="right-card-pad">
                <RightPanalCard 
                    imgLink="https://i.pinimg.com/originals/a3/a5/57/a3a55730fcea940e34cd2aec7f340117.png"
                    description="Understading the power of compounding !!"
                    buttonValue="Learn Now"
                />                
                <RightPanalCard 
                    imgLink="https://www.boostcapital.co.uk/wp-content/uploads/2014/02/Business-Expenses-jesadaphorn-e1393276814926.jpg"
                    description="Track all your expenses on daily basis !!"
                    buttonValue="Track Now"
                />

            </div>
        </div>
    );
}
 

export default RightSideBar;