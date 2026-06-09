import React from "react";
import "./profile.css";
import { USERS } from "./constants";
import { Link } from "react-router-dom";

// props - properties
const Profile = (props) => {
	return (
		<Link to={`/${props.id}`}>
			<div className="p-2 bg-stone-200 rounded-sm">
				<img src={props.image} alt="User-Image" className="profile-img" />
				<h3>My name is {props.name}</h3>
				<p>I am {props.age} years old</p>
				<p>Occupation: {props.occupation} </p>
				<p>Description: {props.description} </p>
			</div>
		</Link>
	);
};

export default Profile;
