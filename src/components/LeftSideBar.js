import React from 'react';
import '../css/LeftSideBar.css'
const LeftSideBar = () => {
   
    return (
        <div className="left-sidebar">
            <label className="active"><i className="table icon"></i>Dashboard</label>
            <label><i className="fa fa-th"></i>Assets</label>
            <label><i class="chart bar icon"></i>Tracker</label>
            <label><i class="calendar check icon"></i>Planning & Advisory</label>
            <label><i class="user icon"></i></label>
        </div>
    );
}

 

export default LeftSideBar;