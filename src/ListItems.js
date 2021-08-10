import React from "react";
//import "./ListItems.css";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            /*  onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}*/
          />
          <input
            type="text"
            id={item.key}
            value={item.type}
            /*onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}*/
          />
          <span>
            <button
              onClick={() => {
                props.deleteItem(item.key);
              }}
            >
              Delete
            </button>
          </span>
        </p>
      </div>
    );
  });

  return <div>{listItems}</div>;
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
