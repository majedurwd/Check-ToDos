import React from "react";

class Todos extends React.Component {

    render() {
        return (
            <div>
                <h2 className="display-5 text-center mb-5">Check Todos</h2>
            </div>
        )
    }
}

export default Todos

const todos ={
    id: "6ty8899",
    text: "main todo text",
    description: "simple description",
    time: "8-8-2020",
    isComplate: false,
    isSelect: false
}