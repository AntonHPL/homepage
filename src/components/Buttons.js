import React from "react";
import "../styles/Buttons.css";
import { Button } from "react-bootstrap";

export default function Buttons ({ total, currentPage, prevHandler, nextHandler }) {
    return (
        <div className="buttons_block">
            <Button
                className="btn btn-secondary" style={{margin: '0 10px 0 0'}}
                disabled={currentPage===0 ? true : false}
                onClick={prevHandler}>Back</Button>
            <span>
                Page {currentPage + 1} of {total}
            </span>
            <Button
                className="btn btn-secondary" style={{margin: '0 0 0 10px'}}
                disabled={currentPage===(total-1) ? true : false}
                onClick={nextHandler}>Forward</Button>
        </div>
    )
}