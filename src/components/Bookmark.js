import React, { useEffect, useState } from "react";
import { pictureSrc } from "../common";
import { Button } from "react-bootstrap";
import "../styles/Bookmark.css";

const Bookmark = () => {
  const [pics, setPics] = useState([]);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    let data = window.localStorage;
    setPics(Object.keys(data).map((key) => JSON.parse(data.getItem(key))));
  }, [changed]);

  function remove(pic) {
    window.localStorage.removeItem(pic.id);
    setChanged(!changed);
  }

  return pics.map((pic) => {
    return (
      <div key={pic.id}>
        <div id="main_block">
          <div id="image_block">
            <img className="image" src={pictureSrc(pic)} alt={pic.id} />
          </div>
          <div id="name_block">
            <p>{pic.tags == null ? 'You have not added any tags.' : '#' + pic.tags}</p>
          </div>
          <Button className="btn btn-danger"
                  style={{width: '50%'}}
                  onClick={() => remove(pic)}>Remove it!</Button>
        </div>
      </div>
    );
  });
};

export default Bookmark;
