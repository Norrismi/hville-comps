import { useEffect, useState } from 'react'

function Scrapped() {

    const [serverData, setServerData] = useState([{}])


    useEffect(() => {
        async function fetchProperty() {
            let res = await fetch('/api');
            let data = await res.json();
            setServerData(data)
        }

        fetchProperty()
    }, [])

    console.log('serverData', serverData)


    return (
        <div>
            <h1>Hello from scrapped</h1>
            {(typeof serverData.title === 'undefined')
                ? (<p>Loading...</p>)
                : (
                    serverData.title.map((e, i) => (
                        <ul key={i}>
                            {e}
                        </ul>
                    ))

                )}

            {/* {serverData.info.map((e, i) => (


                <p key={i}>{e}</p>
            )
            )} */}


        </div>
    )
}

export default Scrapped