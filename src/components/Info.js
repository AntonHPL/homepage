import React, { useState } from "react";
import { pictureSrc } from "../common";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import "../styles/Info.css";

const Info = ({ data }) => {
    const [tags, setTags] = useState([]);
    const [change, setChanged] = useState(false);

    return (
        data.map((pic, index) => (
            <div key={pic.id}>
                <div id="main_block">
                    <div id="image_block">
                        <img className="image" src={pictureSrc(pic)} alt={pic.id} />
                    </div>
                    <div id="name_block">
                        <p>{pic.title}</p>
                    </div>
                    <Button className={isInStorage(pic) ? "btn btn-success disabled" : "btn btn-success active"}
                            style={{width: '50%'}}
                            onClick={() => upload(pic, index)}>Bookmark it!</Button>
                    <br/>
                    <Form.Control
                        id="tags_area"
                        type="text"
                        autoComplete="off"
                        placeholder="some tags?"
                        value={tags[index]}
                        onChange={(event) => updateTag(event, index)}
                        disabled={isInStorage(pic) ? true : false}
                    />
                </div>
            </div>
        ))
    );

    function updateTag(event, index) {
        const updatedTags = [...tags];
        updatedTags[index] = event.target.value;
        setTags(updatedTags);
    }

    function upload(pic, index) {
        pic.tags = tags[index];
        console.log(pic);
        window.localStorage.setItem(pic.id, JSON.stringify(pic));
        setChanged(!change);
    }

    function isInStorage(pic){
        return window.localStorage.getItem(pic.id);
    }
};

export default Info;
