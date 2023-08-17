// import React, { useState } from "react";
// import axios from "axios";
// function Search(){
// const[data,setData]=useState([])
// const[search,setSearch]= useState("") 




// const handleData = () => {
//     axios.get("http://localhost:3005/api/post")
//         .then((res) => {
//             setData(res.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

// const newSearche=()=>{
//     const result= data.filter((e)=>{
//         return e.content.toLowerCase().includes(search.toLowerCase())
        
//     })
//     setData (result)
// } 
// const handelchange=(event)=>{
// setSearch(event.target.value)
// }

// return (
// <div>
//     <input type="text" placeholder="search product" onChange={(event)=>handelchange(event)}  /> 
//     <button   onClick={newSearche} >search</button>
// </div>


//  )




// }
// export default Search;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // New state for filtered data
  const [search, setSearch] = useState("");
  const [triger,setTriger]=useState(true)
  

  useEffect(() => {
    handleData();
  }, []);

  const handleData = () => {
    axios
      .get("http://localhost:3005/api/post")
      .then((res) => {
        console.log(res.data,"haaaay");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newSearche = () => {
    const result = data.filter((e) =>
      e.content.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result); // Update the filteredData state instead of data
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search product"
        value={search}
        onChange={handleInputChange}
      />
      <button onClick={newSearche}>search</button>
      {filteredData.map((item) => ( // nst3ml fil data lmfaltra 
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
}

export default Search;
