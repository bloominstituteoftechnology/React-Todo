import React from "react";

const ItemsList = props => {
  // This is "Reading" State
  return (
    <div>
      <h1>{props.newItem}</h1>
      {props.items.map((item, index) => (
        <div key={item + index}>{item}</div>
      ))}
    </div>
  );
};

export default ItemsList;




// import React from "react";

// const ItemList = props => {
//   // This is "Reading" State
//   return (
//     <div>
//       <h1>{props.newItem}</h1>
//       {props.items.map((item, index) => (
//         <div key={item + index}>{item}</div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;