import React from "react";
import PropTypes from "prop-types"

import { ListGroup, ListGroupItem, CustomInput, Button } from "reactstrap";

// List Item Component
const ListItem = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<ListGroupItem className="d-flex align-items-center">
			<CustomInput
				type="checkbox"
				id={todos.id}
				checked={todos.isSelect}
				onChange={() => toggleSelect(todos.id)}
			/>
			<div className="mx-4">
				<h4>{todos.text}</h4>
				<p>{todos.time.toDateString()}</p>
			</div>
			<Button
				className="ml-auto"
				color={todos.isComplete ? "danger" : "success"}
				onClick={() => toggleComplete(todos.id)}
			>
				{todos.isComplete ? "Complete" : "Running"}
			</Button>
		</ListGroupItem>
	);
};

ListItem.proptypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}
// List View Component
const ListView = ({todos, toggleSelect, toggleComplete}) => {
    return (
        <ListGroup>
            {todos.map(todo => (
                <ListItem
                    key={todo.id}
                    todos={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ListGroup>
    )
}

ListView.proptypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView



