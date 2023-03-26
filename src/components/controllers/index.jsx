import React from "react";
import PropTypes from "prop-types";

import SearchPanel from "./search-panel";
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

import { Row, Col } from "reactstrap";

const Controller = ({
	term,
	view,
	changeView,
	handleSearch,
	toggleForm,
	handleFilter,
    clearSelected,
    clearCompleted,
    reset
}) => (
	<div>
		<SearchPanel
			term={term}
			handleSearch={handleSearch}
			toggleForm={toggleForm}
		/>
		<Row className="my-4 align-items-center">
			<Col md={{ size: 4 }}>
				<FilterController handleFilter={handleFilter} />
			</Col>
			<Col md={{ size: 4 }}>
				<ViewController view={view} changeView={changeView} />
			</Col>
			<Col md={{ size: 4 }} className="d-flex">
				<div className="ms-auto">
                    <BulkController
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
				</div>
			</Col>
		</Row>
	</div>
);

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default Controller