import './BookCarPark.css'
import {useState} from 'react'

const BookCarPark = (props) => {
    const [carPark, setCarPark] = useState({})

    return (
        <article className="card">
            <h3>{carPark.name}</h3>
            <p>{carPark.location || ''}</p>
            <p>{carPark.totalSpaces} total spaces</p>
            <p>{(carPark.hourlyRate || '').toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP'
            })} per hour</p>
        </article>
    )
}

export default BookCarPark
