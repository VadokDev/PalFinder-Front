import React from "react";
import axios from "axios";

import { useDispatch } from 'react-redux';
import { updateProductList } from "../redux/actions/searchActions.js";
import { Form, FormControl } from "react-bootstrap";

const SearchForm = ({ brand, description, image, price, priceF }) => {
	const dispatch = useDispatch();

	const sendIfValidSearch = (searchText) => {
		if (isNaN(parseInt(searchText)) && searchText.length < 4) {
			// Reset product list
			dispatch(updateProductList([]));
			return;
		}

		axios
			.get(
				process.env.REACT_APP_SERVER_URL + "/products?search=" + searchText
			)
			.then((response) => {
				dispatch(updateProductList(response.data));
			})
			.catch(function (error) {
				console.log("Products search error");
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log("Error", error.message);
				}
			});

	};

	return (
		<Form inline className="pull-right w-100">
			<FormControl
				type="text"
				name="searchProduct"
				onChange={(e) => sendIfValidSearch(e.target.value)}
				placeholder="¿Qué estás buscando?"
				className="ml-2 mr-3 w-50"
			/>
		</Form>
	);
};

export default SearchForm;
