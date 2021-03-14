import React from 'react'
import "../App.css";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


function Sidebar() {
    return (
        <div className="Sidebar_App">
        <div className="Sidebar_row row">            
            <div className="Sidebar_col-4">
                <div className="list-group">
                    <a class="list-group-item list-group-item-mine Sidebar_heading" href="/"><ChevronLeftIcon className="Sidebar_size"/> Notifications</a>
                </div>          

                <div class="list-group">
                    <a class="list-group-item list-group-item-mine Sidebar_items" href="/">General<ChevronRightIcon className="Sidebar_icon"/></a>
                    <a class="list-group-item list-group-item-mine Sidebar_items" href="/">Upcoming Appointments <ChevronRightIcon className="Sidebar_icon"/></a>   
                    <a class="list-group-item list-group-item-mine Sidebar_items" href="/">Confirmed <ChevronRightIcon className="Sidebar_icon"/></a>                   
                    <a class="list-group-item list-group-item-mine Sidebar_items" href="/">Failed <ChevronRightIcon className="Sidebar_icon"/></a>                   
                    <a class="list-group-item list-group-item-mine Sidebar_items" href="/">Feedback <ChevronRightIcon className="Sidebar_icon"/></a>                   
                    <a class="list-group-item list-group-item-mine Sidebar_items" href="/">Pushed <ChevronRightIcon className="Sidebar_icon"/></a>                   
                </div>
            </div>
            <div className="col-8"></div>
        </div>
        </div>        
    );
}

export default Sidebar
