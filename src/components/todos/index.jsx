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
				text: "main todo text",
				description: "simple description",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
		],
		isOpenTodoFrom: false,
		searchTerm: "",
		view: "list"
	};
	toggleSelect = (todoId) => {
		const todos = [...this.state.todos]
		const todo = todos.find(t => t.id === todoId)
		todo.isSelect = !todo.isSelect
		this.setState({ todos })
	};

	toggleComplete = (todoId) => {
		const todos = [...this.state.todos]
		let todo = todos.find(t => t.id === todoId)
		todo.isComplete = !todo.isComplete
		this.setState({ todos })
	 };

	toggleForm = () => {
		this.setState({
			isOpenTodoFrom: !this.state.isOpenTodoFrom
		})
	}

	createTodo = (todo) => {
		todo.id = shortid.generate()
		todo.time = new Date()
		todo.isComplate = false
		todo.isSelect = false
		const todos = [todo, ...this.state.todos]
		this.setState({ todos })
		this.toggleForm()
	}
	
	handleSearch = () => { }

	handleFilter = () => { }
	changeView = (event) => { 
		this.setState({
			view: event.target.value
		})
	}
	clearSelected = () => { }
	clearCompleted = () => { }
	reset = () => { }

	getView = () => {
		return this.state.view === "list" ? (
			<ListView
				todos={this.state.todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		) : (
			<TableView
				todos={this.state.todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>	
		)
	}

    
	render() {
		return (
			<div>
				<h2 className="display-5 text-center mb-5">Check Todos</h2>
				< Controller
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
				<div>
					{this.getView()}
				</div>
				<Modal isOpen={this.state.isOpenTodoFrom} toggle={this.toggleForm}>
					<ModalHeader toggle={this.toggleForm}>
						Create New Todo Item
					</ModalHeader>
					<ModalBody>
						< CreateTodoForm createTodo={this.createTodo} />
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default Todos;