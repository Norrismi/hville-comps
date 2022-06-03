import { useState, useEffect, FC } from 'react'

const Scraped: FC = () => {



    const [price, setPrice] = useState<string | null>(null);
    const [sqft, setSqft] = useState<string | null>(null);
    const [address, setAddress] = useState<string | null>(null);

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

export default Scraped
