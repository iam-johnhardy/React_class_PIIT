import React from "react";
import { useParams } from "react-router-dom";
import { USERS } from "../components/constants";

const UserPage = () => {
	const { id } = useParams();

	// fetch the current user based on the id using (.find array method)
	return <div>This is the users page {id}</div>;
};

export default UserPage;
