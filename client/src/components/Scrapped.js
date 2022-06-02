import { useState, useEffect } from 'react'

function Scrapped() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/info')
            .then((res) => res.json())
            .then((data) =>
                setData(data)
            )

    }, [])



    console.log(data && data.sqft)

    return (
        <div>
            <div>Scraped</div>


            
      {data && data.price.map((item, i) => (
          <ul >
              {item}
             {/* {`${i+1}) ${item.price} ${item.sqft}`} */}
          </ul>
      ))}



        </div>
    )
}

export default Scrapped




































// import { useEffect, useState } from 'react'
// import { collection, getDocs } from 'firebase/firestore';
// import db from "../config/firebase.js";


// function Scrapped() {

//     const [property, setProperty] = useState([])


//     useEffect(() => {
//         fetchProperty();
//     }, [])


//     useEffect(()=>{
//         console.log(property)
//     }, [property])




//     const fetchProperty = async () => {
//         const propertyCollectionRef = collection(db, 'property')
//         getDocs(propertyCollectionRef)
//             .then(res => {
//                 const props = res.docs.map(doc => ({
//                     data: doc.data(),
//                     id: doc.id
//                 }))
//                 setProperty(props)
//             })
//             .catch(error => console.log(error.message))


//     }


//     return (
//         <div>
//           <h1>Properties</h1>

//                 <ul>
//               {property.map(item =>(
//                   <li key={item.id}>{item.data.data.price}</li>
//               ) )}
//           </ul>
//         </div>
//     )
// }

// export default Scrapped