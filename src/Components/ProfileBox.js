import React, {Component} from 'react'
import '../App.css'
import data from '../data';

function ProfileBox(props){
    // console.log(props.employee)

    return (
        <div className="profile-box">
            <div className="pb-top-line">
                <h2 className="employee">
                    {props.employee.name.first} {props.employee.name.last}
                </h2>
                <p className="num-track">{props.employee.id}/{props.dataLength}</p>
            </div>
            <div className="main-text employeeInfo">
                <ul className="eeInfo">
                    <li><strong>From: </strong>{props.employee.city}, {props.employee.country}</li>
                    <li><strong>Job Title: </strong>{props.employee.title}</li>
                    <li><strong>Employer:</strong> {props.employee.employer}</li>
                </ul>
            </div>
            <div className="main-text fav-movies">
                <p className="employeefav"><strong>Favorite Movies: </strong></p>
                <ol>
                    <li>{props.employee.favoriteMovies[0]}</li>
                    <li>{props.employee.favoriteMovies[1]}</li>
                    <li>{props.employee.favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
    )
}

export default ProfileBox;