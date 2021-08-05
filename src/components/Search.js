import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/Search.css";

function Info({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        onSearch(searchValue);
    };
  
    return (
        <div id="form">
            <Form onSubmit={onSubmit}>
                <Form.Control
                    id="main_input"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter Picture Title"
                    value={searchValue}
                    onChange={(element) => setSearchValue(element.target.value)}
                />
            </Form>
        </div>
    );
};

export default Info;
