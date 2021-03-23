import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import person from "../assets/person.png";
import doctor from "../assets/doctor.svg";
import whiteicon from "../assets/whiteicon.png";
import "./Confirmed.css";
import "./Feedback.css";
import GradeIcon from '@material-ui/icons/Grade';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          pt_id: 100202020202,
          status: "Confirmed",
          title: "Myself",
          appointment_date: "23 Wed",
          appointment_year:"Jan 21",
          appointment_slot: "09:30 AM",
          doctor_name: "Dr. Swapnil Krishnakant Katare",
          doctor_specicality: "Auyrveda_1",
          doctor_exp: 12,
          feedback_date:"26 Fri, Feb 21",
          feedback_time: "21:23",
          fees: 500,
          quick_option1:"Very Polite",
          quick_option2:"Consultation on Time",
          detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc eleifend augue turpis in. Ornare amet augue sociis maecenas eu felis senectus et turpis. Egestas mauris a at risus lacus. Bibendum amet quam faucibus vitae amet varius sed commodo, metus. Sagittis vitae pretium id lacus morbi. Lacinia venenatis proin enim tincidunt consectetur metus mauris tincidunt. Dolor consectetur at quis cras ridiculus. Adipiscing facilisis lobortis augue vitae morbi aliquet. Cum ipsum faucibus felis pharetra, tempus. Interdum libero, id ligula sed lectus mauris sed tempus, mi. Purus magnis a sapien neque, tempus quam risus nec. Nec faucibus eget nibh tempor eu. Sodales amet quam et purus nunc cursus scelerisque sed.",
          semi_detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc turpis in."
        },
        {
            pt_id: 100202020202,
            status: "Confirmed",
            title: "Myself",
            appointment_date: "9 Mon",
            appointment_year:"Feb 21",
            appointment_slot: "09:30 AM",
            doctor_name: "Dr. Ruchika Sapkale",
            doctor_specicality: "Auyrveda_2",
            doctor_exp: 12,
            feedback_date:"26 Fri, Feb 21",
            feedback_time: "21:23",
            fees: 500,
            quick_option1:"Very Polite",
            quick_option2:"Consultation on Time",
            detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc eleifend augue turpis in. Ornare amet augue sociis maecenas eu felis senectus et turpis. Egestas mauris a at risus lacus. Bibendum amet quam faucibus vitae amet varius sed commodo, metus. Sagittis vitae pretium id lacus morbi. Lacinia venenatis proin enim tincidunt consectetur metus mauris tincidunt. Dolor consectetur at quis cras ridiculus. Adipiscing facilisis lobortis augue vitae morbi aliquet. Cum ipsum faucibus felis pharetra, tempus. Interdum libero, id ligula sed lectus mauris sed tempus, mi. Purus magnis a sapien neque, tempus quam risus nec. Nec faucibus eget nibh tempor eu. Sodales amet quam et purus nunc cursus scelerisque sed.",
            star:"",
            semi_detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc turpis in."
        },
        {
            pt_id: 100202020202,
            status: "Confirmed",
            title: "Myself",
            appointment_date: "11 Thurs",
            appointment_year:"Jul 21",
            appointment_slot: "09:30 AM",
            doctor_name: "Dr. Vartika Dhantole",
            doctor_specicality: "Auyrveda_2",
            doctor_exp: 12,
            feedback_date:"26 Fri, Feb 21",
            feedback_time: "21:23",
            fees: 500,
            quick_option1:"Very Polite",
            quick_option2:"Consultation on Time",
            detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc eleifend augue turpis in. Ornare amet augue sociis maecenas eu felis senectus et turpis. Egestas mauris a at risus lacus. Bibendum amet quam faucibus vitae amet varius sed commodo, metus. Sagittis vitae pretium id lacus morbi. Lacinia venenatis proin enim tincidunt consectetur metus mauris tincidunt. Dolor consectetur at quis cras ridiculus. Adipiscing facilisis lobortis augue vitae morbi aliquet. Cum ipsum faucibus felis pharetra, tempus. Interdum libero, id ligula sed lectus mauris sed tempus, mi. Purus magnis a sapien neque, tempus quam risus nec. Nec faucibus eget nibh tempor eu. Sodales amet quam et purus nunc cursus scelerisque sed.",
            quick_opt:"very polite",
            semi_detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc turpis in."
        },
        {
            pt_id: 100202020202,
            status: "Confirmed",
            title: "Myself",
            appointment_date: "7 Sat",
            appointment_year:"May 21",
            appointment_slot: "09:30 AM",
            doctor_name: "Dr. Riddhi Sapkale",
            doctor_specicality: "Auyrveda_2",
            doctor_exp: 12,
            feedback_date:"26 Fri, Feb 21",
            feedback_time: "21:23",
            fees: 500,
            quick_option1:"Very Polite",
            quick_option2:"Consultation on Time",
            detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc eleifend augue turpis in. Ornare amet augue sociis maecenas eu felis senectus et turpis. Egestas mauris a at risus lacus. Bibendum amet quam faucibus vitae amet varius sed commodo, metus. Sagittis vitae pretium id lacus morbi. Lacinia venenatis proin enim tincidunt consectetur metus mauris tincidunt. Dolor consectetur at quis cras ridiculus. Adipiscing facilisis lobortis augue vitae morbi aliquet. Cum ipsum faucibus felis pharetra, tempus. Interdum libero, id ligula sed lectus mauris sed tempus, mi. Purus magnis a sapien neque, tempus quam risus nec. Nec faucibus eget nibh tempor eu. Sodales amet quam et purus nunc cursus scelerisque sed.",
            star:"",
            quick_opt:"very polite",
            semi_detail_content:"Maecenas et at fermentum lobortis nisi vulputate facilisi nulla. Justo nulla quis sagittis nunc turpis in."
        },
      ],
      prevClicked: -1,
    };
  }
  handleClick = (index) => {
    console.log(index);
    let parent = document.getElementById(index);
    let children = parent.childNodes;
    console.log(children[0]);
    children[0].style.display = "none";
    children[1].style.display = "block";
    if (this.state.prevClicked !== -1) {
      let prevParent = document.getElementById(this.state.prevClicked);
      let children = prevParent.childNodes;
      console.log(children[0]);
      children[0].style.display = "block";
      children[1].style.display = "none";
    }
    this.setState({
      prevClicked: index,
    });
  };

  render() {
    return (
        <div className="container confirmed-main">
            <div className="row">
                <div className="col-sm-8">                
                    {this.state.data.map((data, index) => (
                    <div className="confirmed-notification">
                        <div id={index}>
                        <div
                            className="shortNotify card"
                            id={`shortNotify${index}`}
                            onClick={() => this.handleClick(index)}>
                            <div className="d-flex flex-row">
                                <div className="p-1 image-icon">
                                    <img src={person} className="appointment-person" />
                                </div>
                                <div className="p-1">
                                    <div className="row">
                                        <div className="col-8 part-1">
                                            <div className="row shortnotif-name">
                                                <b>With {data.doctor_name}</b><br></br>
                                            </div>
                                            <div className="row">
                                                <span className="shortnotif-feedback">
                                                {data.semi_detail_content}
                                                {/* <div>
                                                    {data.star}
                                                </div>
                                                {data.quick_opt} */}
                                                </span>
                                            </div>
                                        </div>
                                        <div  className="col-4">
                                            <div className="row shortnotif-time">
                                                <b className="time" style={{ color: "#FFD600" }}>
                                                    23:11
                                                </b>
                                                <br></br>
                                            </div>
                                            <div className="row shortnotif-date">
                                                <span className="date">
                                                    <b>{data.appointment_date}</b> {data.appointment_year}
                                                </span>
                                            </div>    
                                        </div>                                      
                                    </div>                                
                                </div>                            
                            </div>
                        </div>

                        <div
                            className="longNotify"
                            id={`longNotify${index}`}
                            style={{
                            display: "none",
                            }}
                        >  
                        <div className="card notification-card">
                            <div className="row">
                            <div className="years"><b>13</b></div>
                                <div className="col-sm-1">
                                    <div className="row">
                                        <img src={person} className="card-img base-img" /> 
                                        <img src={whiteicon} alt="x" className="type-of-appointment" /> 
                                    </div>
                                    <div className="row">
                                        <hr className="vertical-line"></hr>
                                    </div>
                                    <div className="row">
                                        <img src={person} className="card-img" />{" "}
                                    </div>
                                </div>
                                <div className="col-sm-10 ">
                                    <div className="doctor-name d-flex flex-row">
                                            <div className="p-2">
                                                <div className="d-flex flex-row">
                                                    <b className="D-name">With {data.doctor_name} </b>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div><small className="doctor-speciality">{data.doctor_specicality}</small>
                                                        <span className="doctor-location">Mumbai |<b> MAH</b></span>
                                                    </div>
                                                    <div className="call-book-button"> 
                                                        <button className=" btn btn-outline btn-call" style={{ color: "#1A936F" }}>
                                                        Call
                                                        </button>
                                                        <button className=" btn btn-outline btn-book" style={{ color: "#1A936F" }}>
                                                        Book
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className=" appointment-detail-time">
                                        <div className="">
                                            <b>Slot of Appointment :{" "}</b>
                                            <b style={{ color: "#1A936F" }}>{data.appointment_slot}</b>
                                        </div>
                                        <div className="">
                                            <b> Date of Appointment :{" "}</b>
                                            <b>{data.appointment_date.split(",").splice(0, 2)}</b>,{" "}
                                            {data.appointment_date.split(",").splice(2, 4)}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row confirmed-app-header">
                                        <div style={{textTransform: 'uppercase'}} className="p-2 P-name col-4">
                                            <b> {data.title}</b>
                                        </div>
                                        <div className="p-2 patient id col-4">Pt. Id : {data.pt_id}</div>
                                        <div className="p-2 patient status col-4">Status : <b><span className="appointment-status" style={{ color: "#1A936F" }}>{data.status} </span></b></div>
                                    </div>
                                    <div className=" feedback-detail-time">
                                        <div className="">
                                            <b> Feedback date :{" "}</b>
                                            <b>{data.feedback_date.split(",").splice(0, 2)}</b>,{" "}
                                            {data.feedback_date.split(",").splice(2, 4)}
                                        </div>

                                        <div className="">
                                            <b>Feedback time :{" "}</b>
                                            <b >{data.feedback_time}</b>
                                        </div>
                                        <div className="">
                                            <b>Fees: </b>
                                            <b>Rs {data.fees}</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="row four">
                                    <div className="col quick-comment"><b className="quich-comment-bg" style={{backgroundColor:'#CDF3BB'}} >{data.quick_option1}</b></div>
                                    <div className="col quick-comment"><b className="quich-comment-bg" style={{backgroundColor:'#CDF3BB'}} >{data.quick_option2}</b></div>
                                    <div className="col quick-comment"><b className="quich-comment-bg" style={{backgroundColor:''}} >{data.quick_option2}</b></div>
                                    <div className="col quick-comment"><b className="quich-comment-bg" style={{backgroundColor:''}} >{data.quick_option2}</b></div>
                                    <div className="col quick-comment"><b className="quich-comment-bg" style={{backgroundColor:'#F3BBBB'}} >{data.quick_option1}</b></div>
                                </div>
                                <div className="feedback-bottom">
                                    <div className="doctor-name d-flex flex-row rating-button">
                                        <div className="rating">
                                            <GradeIcon className="star"/> 
                                            <GradeIcon className="star"/> 
                                            <GradeIcon className="star"/> 
                                            <GradeIcon className="star"/> 
                                            <GradeIcon className="starbg"/>
                                        </div>
                                        <div className="call-book-button del-edit-button"> 
                                            <button className=" btn btn-outline-del" style={{color: "#CC6565"}}>
                                            Delete
                                            </button>
                                            <button className=" btn btn-outline-edit" style={{color: "#D996DB"}}>
                                            Edit
                                            </button>
                                        </div>  
                                        <br></br>
                                    </div>                                                                                                                            
                                    <div className="doctor-des">
                                        <p>
                                            {data.detail_content} {" "}
                                        </p>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>           
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
  }
}
