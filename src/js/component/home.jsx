import React from "react";

import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/card.jsx";
import Footer from "../component/footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="row m-3">
				<div className="col-md-3">
				<Card description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed justo libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."}> </Card>
				</div>
				<div className="col-md-3">
				<Card description={"Cras semper magna at dictum molestie. Nunc ut lacus vehicula sem porta tristique sit amet eget erat. Pellentesque eget consectetur dui. Nullam vehicula lacus non pulvinar bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus."}></Card>
				</div>
				<div className="col-md-3">
				<Card description={"Nulla ut ipsum sed nulla venenatis iaculis. Etiam quam diam, volutpat sed massa non, semper consectetur libero. Proin molestie metus mi. Quisque dictum pellentesque lorem."}></Card>
				</div>
				<div className="col-md-3">
				<Card description={"Nunc sagittis fringilla quam eget tincidunt. Ut ut consequat elit. Vivamus ullamcorper, nunc et fermentum dictum, lectus nunc rhoncus libero, id dictum erat tellus vel nisi. Duis faucibus aliquam eleifend. Lorem pellentesque sollicitudin."}></Card>
				</div>
			</div>
			<div className="container-fluid bg">
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
