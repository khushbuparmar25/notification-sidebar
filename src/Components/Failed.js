// import React, { Component } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import person from "../assets/person.svg";
// import doctor from "../assets/doctor.svg";
// import "./Confirmed.css";

// export default class Failed extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           pt_id: 100102020202,
//           status: "Failed",
//           appointment_type: "In clinic",
//           title: "Myself",
//           booking_date: "23 ,TUE,Feb,21",
//           booking_time: "10:11:AM",
//           appointment_date: "23 ,TUE,Feb, 21",
//           appointment_slot: "9:30 AM",
//           doctor_name: "Dr. Swapnil Krishnakant Katare1",
//           doctor_specicality: "Auyrveda1",
//           doctor_exp: 12,
//           detail_heading: "Jo Hoga Deqha Jayega Clinic1",
//           detail_content:
//             "Consequat orci tortor, at volutpat, aliquam, at eget. Platea mi at purus sit suspendisse enim. Imperdiet sed pretium vulputate pulvinar nullam eget feugiat",
//           fees: 500,
//           map_link: "#",
//         },
//         {
//           pt_id: 100202020202,
//           status: "Failed",
//           appointment_type: "In clinic",
//           title: "Myself",
//           booking_date: "23 ,TUE,Feb,21",
//           booking_time: "10:11:AM",
//           appointment_date: "23 ,TUE,Feb, 21",
//           appointment_slot: "9:30 AM",
//           doctor_name: "Dr. Swapnil Krishnakant Katare2",
//           doctor_specicality: "Auyrveda2",
//           doctor_exp: 12,
//           detail_heading: "Jo Hoga Deqha Jayega Clinic2",
//           detail_content:
//             "Consequat orci tortor, at volutpat, aliquam, at eget. Platea mi at purus sit suspendisse enim. Imperdiet sed pretium vulputate pulvinar nullam eget feugiat",
//           fees: 500,
//           map_link: "#",
//         },
//         {
//           pt_id: 100202020202,
//           status: "Failed",
//           appointment_type: "In clinic",
//           title: "Myself",
//           booking_date: "23 ,TUE,Feb,21",
//           booking_time: "10:11:AM",
//           appointment_date: "23 ,TUE,Feb, 21",
//           appointment_slot: "9:30 AM",
//           doctor_name: "Dr. Swapnil Krishnakant Katare3",
//           doctor_specicality: "Auyrveda3",
//           doctor_exp: 12,
//           detail_heading: "Jo Hoga Deqha Jayega Clinic2",
//           detail_content:
//             "Consequat orci tortor, at volutpat, aliquam, at eget. Platea mi at purus sit suspendisse enim. Imperdiet sed pretium vulputate pulvinar nullam eget feugiat",
//           fees: 500,
//           map_link: "#",
//         },
//       ],
//       prevClicked: -1,
//     };
//   }
//   handleClick = (index) => {
//     console.log(index);
//     let parent = document.getElementById(index);
//     let children = parent.childNodes;
//     console.log(children[0]);
//     children[0].style.display = "none";
//     children[1].style.display = "block";
//     if (this.state.prevClicked !== -1) {
//       let prevParent = document.getElementById(this.state.prevClicked);
//       let children = prevParent.childNodes;
//       console.log(children[0]);
//       children[0].style.display = "block";
//       children[1].style.display = "none";
//     }
//     this.setState({
//       prevClicked: index,
//     });
//     //   let len = this.state.data.length;
//     //   for (let index = 0; index < len; index++) {
//     //     let ele = document.getElementById(index);
//     //   }
//   };

//   render() {
//     return (
//       <div className="container confirmed-main">
//       <div className="row">
//       <div className="col-sm-8">
     
//         {this.state.data.map((data, index) => (
//           <div className="confirmed-notification">
//             <div id={index}>
//               <div
//                 className="shortNotify card"
//                 id={`shortNotify${index}`}
//                 onClick={() => this.handleClick(index)}
//               >
//                 <div className="d-flex flex-row">
//                   <div className="p-1">
//                     <img src={person} className="appointment-person-failed"/>
//                   </div>
//                   <div className="p-1">
//                     <b>with {data.doctor_name}</b>
//                     <div>
//                       <span>
//                         {" "}
//                         <b>Appointment: </b>{" "}
//                         <b>{data.appointment_date.split(",").splice(0, 2)}</b>,{" "}
//                         {data.appointment_date.split(",").splice(2, 4)} &emsp; &emsp;
//                         &emsp;
//                       </span>
//                       <span>
                     
//                       <b>Type: </b>
//                       <span>{data.appointment_type}</span> &emsp; &emsp;
//                       &emsp;
//                     </span>
//                       <b className="fees" style={{ color: "#eb3434" }}>
//                         {data.booking_time.split(":")[0]}:{data.booking_time.split(":")[1]}
//                       </b>
//                     </div>
//                   </div>
//                   <div className="p-10 fees" style={{fontWeight: '500'}} >{data.title}</div>
//                 </div>
//               </div>

//               <div
//                 className="longNotify"
//                 id={`longNotify${index}`}
//                 style={{
//                   display: "none",
//                 }}
//               >  <div className="card notification-card">
//               <div className="row">
//                 <div className="col-sm-1">
//                   <div className="row">
//                     <img src={doctor} className="appointment-person-failed" />  
//                   </div>
//                   <div className="row">
//                     <hr className="vertical-line-failed"></hr>
//                   </div>
//                   <div className="row">
//                     <img src={person} className="appointment-person" />{" "}
//                   </div>
//                 </div>
//                 <div className="col-sm-10 "> 
//                 <div className=" d-flex flex-row tess">
//                 <div>
//                         <span>Appointment Type: </span>{" "}
//                         <b>{data.appointment_type}</b> 
//                       </div>
                
//                       <div>Status : <span className="appointment-status-failed">{data.status} </span></div>
              
//                 </div> 
//               <div className="d-flex flex-row">
//               <div>
//               <div className="d-flex flex-row">
//               <b>With {data.doctor_name} </b>
    
//               </div>
//                     <div className="d-flex flex-row">
//                     <div><small>{data.doctor_specicality}</small>
//                     <span className="doctor-location ml-4">
//                     <span>Mumbai </span>|<b> MAH</b>
//                     <span className="ml-2">{data.doctor_exp} Years of experience</span>
//                   </span>
//                     </div>
//                     <div className="call-book-button"> 
//                     <button className=" btn btn-outline-success">
//                     Call
//                   </button>
//                   <button className=" btn btn-outline-success">
//                     Book
//                   </button></div>
//                     </div>
//                     </div>
//               </div>
//               <div className="d-flex flex-row confirmed-app-header">
//               <div style={{textTransform: 'uppercase'}} className="p-2">
//              <b> {data.title}</b></div>
//               <div className="p-2 ml-5">Pt. Id : {data.pt_id}</div>
             
//               </div>
//             <div className="booking-time d-flex flex-row">
//             <span>
//                 Date of Booking :{" "}
//                 <b>{data.booking_date.split(",").splice(0, 2)}</b>,{" "}
//                 {data.booking_date.split(",").splice(2, 4)}
//               </span>
//               &emsp;&emsp;&emsp;{" "}
//               <span>
//                 Time of Booking : {data.booking_time.split(":")[0]}
//                 <b>:{data.booking_time.split(":")[1]}</b>
//                 {data.booking_time.split(":")[2]}
//               </span>
//             </div>
//                 </div>
//               </div>

//             <div className=" appointment-detail-time">
//               <div className="">
//                 <b> Date of Appointment :{" "}</b>
//                 <b>{data.appointment_date.split(",").splice(0, 2)}</b>,{" "}
//                 {data.appointment_date.split(",").splice(2, 4)}
//               </div>

//               <div className="">
//                 <b>Slot of Appointment :{" "}</b>
//                 <b style={{ color: "#1A936F" }}>{data.appointment_slot}</b>
//               </div>
    
//             </div>
//           </div>
//               </div>
//             </div>
           
//           </div>
//         ))}
//       </div>
//       </div>
//       </div>
//     );
//   }
// }
import React from 'react'

const Failed = () => {
    return (
        <div>
            Failed
        </div>
    )
}
export default  Failed

