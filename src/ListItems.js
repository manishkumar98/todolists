import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => {
                props.deleteItem(item.key);
              }}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;

/*import React from 'react';

function ListItems(props){
  const items=props.items;
  const listItems=items.map(item=>{
    
      <p>
        <input type="text" id={item.key} value={item.text} category={item.category} onChange{(e)=>{
          props.setUpdate(e.target.value,item.key)}}/>
        <span>
        <button onClick={()=>{
          props.delete(item.key)
        }}>Delete</button>
        </span>
      </p></div>
  })
  return (<>{listItems}</>)
}
export default ListItems;
// <div className="list" key={list.item}>*/
