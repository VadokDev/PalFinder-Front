import React from "react";
import PropTypes from "prop-types";

import { Card, Badge } from "react-bootstrap";

const Product = ({ brand, description, image, price, priceF }) => {
	return (
		<Card className="h-100" id="productResult">
			<Card.Img
				variant="top"
				style={{ "maxHeight": 220 }}
				src={"https://" + image}
			/>
			<Card.Body>
				<Card.Title>{brand}</Card.Title>
				{priceF ? (
					<Card.Subtitle className="mb-2 text-muted">
						<h4>
							${priceF}{" "}
							<Badge pill className="ml-1" variant="danger">
								50%
							</Badge>
						</h4>
						<s>${price}</s>
					</Card.Subtitle>
				) : (
					<Card.Subtitle className="mb-2 text-muted ">
						<h4>{price}</h4>
					</Card.Subtitle>
				)}
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

Product.propTypes = {
	brand: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string,
	price: PropTypes.number.isRequired,
	priceF: PropTypes.number,
};

export default Product;
