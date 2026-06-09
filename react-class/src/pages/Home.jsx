import React, { useEffect, useState } from "react";
import { apiURL } from "../lib/api";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [restaurants, setRestaurants] = useState([]);
	const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

	const navigate = useNavigate();

	// delete request
	const deleteData = async (id) => {
		try {
			setIsDeleting(true);
			const response = await fetch(`${apiURL}/${id}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error(`Delete failed: ${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			alert("Deleted successfully");
			fetchData();
		} catch (error) {
			console.log("Delete error:", error);
		} finally {
			setIsDeleting(false);
		}
	};

    // Update request with PUT or PATCH support
    const updateData = async (id, updatedData, method = "PATCH") => {
        try {
            setIsUpdating(true);
            const response = await fetch(`${apiURL}/${id}`, {
                method,
                body: JSON.stringify(updatedData),
                headers: {
                    "Content-type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error(`Update failed: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            alert(`${method} updated successfully`);
            fetchData();
        } catch (error) {
            console.log("Update error:", error);
        } finally {
            setIsUpdating(false);
        }
    };

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(apiURL);
			if (!response.ok) {
				throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			setRestaurants(data);
		} catch (error) {
			console.log("Fetch error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	// triggers the fetch function on inital render
	useEffect(() => {
		fetchData();
	}, []);

	// displays a loading skeleton during api call
	if (isLoading)
		return (
			<div className="min-h-screen py-10">
				<div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5">
					{Array.from({ length: 9 }).map((_, idx) => (
						<ProductCardSkeleton key={idx} />
					))}
				</div>
			</div>
		);

	return (
		<div className="min-h-screen py-5">
			{/* cta for creating a new restaurant */}
			<div className="flex justify-between items-center px-20 py-5">
				<h1 className="text-3xl font-bold">All Restaurants</h1>

				<button
					onClick={() => navigate("/create-restaurant")}
					className="bg-green-600 p-2 text-white rounded-2xl"
				>
					Add New +
				</button>
			</div>

			{/* restaurants grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5">
				{restaurants.map((item) => (
					<ProductCard
						{...item}
                        
						handleDelete={() => deleteData(item.id)}
                        // pass the update function as a prop to the ProductCard component
						handleUpdate={updateData}

						key={item.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
