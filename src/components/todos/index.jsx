import React from "react";
import shortid from "shortid";

import { Modal, ModalHeader, ModalBody } from "reactstrap"

import ListView from "../listview";
import TableView from "../tableview";
import Controller from "../controllers";
import CreateTodoForm from "../create-todo-form";

class Todos extends React.Component {
	state = {
		todos: [
			{
				id: "6ty889",
				text: "main todo text",
				description: "simple description",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
			{
				id: "6ty88b",
				text: "Backend Api",
				description: "simple description",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
			{
				id: "6ty88m",
				text: "Create React App",
				description: "simple description",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
		],
		isOpenTodoFrom: false,
		searchTerm: "",
		view: "list",
		filter: "all"
	};
	toggleSelect = (todoId) => {
		const todos = [...this.state.todos];
		const todo = todos.find((t) => t.id === todoId);
		todo.isSelect = !todo.isSelect;
		this.setState({ todos });
	};

	toggleComplete = (todoId) => {
		let todos = [...this.state.todos];
		let todo = todos.find((t) => t.id === todoId);
		todo.isComplete = !todo.isComplete;
		this.setState({ todos });
	};

	toggleForm = () => {
		this.setState({
			isOpenTodoFrom: !this.state.isOpenTodoFrom,
		});
	};

	createTodo = (todo) => {
		todo.id = shortid.generate();
		todo.time = new Date();
		todo.isComplate = false;
		todo.isSelect = false;
		const todos = [todo, ...this.state.todos];
		this.setState({ todos });
		this.toggleForm();
	};

	handleSearch = (value) => {
		return this.setState({ searchTerm: value });
	};

	handleFilter = (filter) => { 
		this.setState({filter})
	};
	
	changeView = (event) => {
		this.setState({
			view: event.target.value,
		});
	};
	clearSelected = () => {};
	clearCompleted = () => {};
	reset = () => {};

	performSearch = () => {
		return this.state.todos.filter((todo) =>
			todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
		);
	};

	performFilter = (todos) => {
		const { filter } = this.state
		if (filter === "completed") {
			return todos.filter(todo => todo.isComplate)
		} else if (filter === "running"){
			return todos.filter(todo => !todo.isComplate)
		} else {
			return todos
		}
	}

	getView = () => {
		let todos = this.performSearch()
		todos = this.performFilter(todos)
		return this.state.view === "list" ? (
			<ListView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		) : (
			<TableView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		);
	};

	render() {
		return (
			<div>
				<h2 className="display-5 text-center mb-5">Check Todos</h2>
				<Controller
					term={this.state.searchTerm}
					toggleForm={this.toggleForm}
					handleSearch={this.handleSearch}
					view={this.state.view}
					changeView={this.changeView}
					handleFilter={this.handleFilter}
					clearSelected={this.clearSelected}
					clearCompleted={this.clearCompleted}
					reset={this.reset}
				/>
				<div>{this.getView()}</div>
				<Modal
					isOpen={this.state.isOpenTodoFrom}
					toggle={this.toggleForm}
				>
					<ModalHeader toggle={this.toggleForm}>
						Create New Todo Item
					</ModalHeader>
					<ModalBody>
						<CreateTodoForm createTodo={this.createTodo} />
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default Todos;