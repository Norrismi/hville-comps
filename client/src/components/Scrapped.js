import { useState, useEffect } from 'react'

function Scrapped() {

    const [price, setPrice] = useState(null);
    const [sqft, setSqft] = useState(null);
    const [address, setAddress] = useState(null);
 


    useEffect(() => {
        fetch('/price')
            .then((res) => res.json())
            .then((data) => setPrice(data))

        fetch('/sqft')
            .then((res) => res.json())
            .then((data) => setSqft(data))

        fetch('/address')
            .then((res) => res.json())
            .then((data) => setAddress(data))

    }, [])


    return (
        <div>

            {price && price.price.map((item, i) => (
                <ul key={item.id}>
                    {`${i + 1}) ${item} `}
                </ul>
            ))}


            {sqft && sqft.sqft.map((item, i) => (
                <ul key={item.id}>
                    {item}

                </ul>
            ))}

            {address && address.address.map((item, i) => (
                <ul key={item.id}>
                    {item}
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