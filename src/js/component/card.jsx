import React from "react";
import PropType from "prop-types";

const Card = props => {
    return(
        <div class="card text-center">
            <img src="http://via.placeholder.com/500x325.jpg" class="card-img-top" alt="image" />
                <div class="card-body py-5">
                    <h5 class="card-title fs-3">Card title</h5>
                    <p class="card-text fs-5">{props.description}</p>
                </div>
                <div class="card-footer">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
        </div>
    );
}


Card.propTypes = {
	description: PropType.string
};

export default Card;