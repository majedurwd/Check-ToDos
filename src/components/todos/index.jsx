import React from "react";

import ListView from "../listview";
import TableView from "../tableview";

class Todos extends React.Component {
	state = {
		todos: [
			{
				id: "6ty8899",
				text: "main todo text",
				description: "simple description",
				time: new Date(),
				isComplate: false,
				isSelect: false,
			},
			{
				id: "6ty88b9",
				text: "main todo text",
				description: "simple description",
				time: new Date(),
				isComplate: false,
				isSelect: false,
			},
		],
	};
	toggleSelect = (todoId) => {};

    toggleComplete = (todoId) => { };
    
	render() {
		return (
			<div>
				<h2 className="display-5 text-center mb-5">Check Todos</h2>
				<div>
					<ListView
						todos={this.state.todos}
						toggleSelect={this.toggleSelect}
						toggleComplete={this.toggleComplete}
					/>
				</div>
				<div>
					<TableView
						todos={this.state.todos}
						toggleSelect={this.toggleSelect}
						toggleComplete={this.toggleComplete}
					/>
				</div>
			</div>
		);
	}
}

export default Todos;