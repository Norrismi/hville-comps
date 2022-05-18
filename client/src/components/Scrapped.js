import { useEffect, useState } from 'react'

function Scrapped() {

    const [serverData, setServerData] = useState({})


    useEffect(() => {
        fetch('/data').then(
            res => res.json()
        ).then(
            data => {
                setServerData(data)
            }
        )
    }, [])




    return (
        <div>{serverData}</div>
    )
}

export default Scrapped