import React from 'react'
import "../App.css";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Confirmed from "../Components/Confirmed";
// import Feedback from "../Components/Feedback";

function Sidebar() {
    return (
        <div className="Sidebar_App tess">
        <div className="Sidebar_row row">            
            <div className="Sidebar_col-4">
                <div className="list-group">
                    <a className="list-group-item list-group-item-mine Sidebar_heading" href="/"><ChevronLeftIcon className="Sidebar_size"/> Notifications</a>
                </div>
                <div className="list-group">
                    <a className="list-group-item list-group-item-mine Sidebar_items" href="/gereral">General<ChevronRightIcon className="Sidebar_icon"/></a>
                    <a className="list-group-item list-group-item-mine Sidebar_items" href="/appointments">Upcoming Appointments <ChevronRightIcon className="Sidebar_icon"/></a>   
                    <a className="list-group-item list-group-item-mine Sidebar_items" href="/confirmed">Confirmed <ChevronRightIcon className="Sidebar_icon"/></a>                   
                    <a className="list-group-item list-group-item-mine Sidebar_items" href="/failed">Failed <ChevronRightIcon className="Sidebar_icon"/></a>                   
                    <a className="list-group-item list-group-item-mine Sidebar_items" href="/feedback">Feedback <ChevronRightIcon className="Sidebar_icon"/></a>                   
                    <a className="list-group-item list-group-item-mine Sidebar_items" href="/pushed">Pushed <ChevronRightIcon className="Sidebar_icon"/></a>                   
                </div>
            </div>
        </div>
        </div>        
    );
}

export default Sidebar
