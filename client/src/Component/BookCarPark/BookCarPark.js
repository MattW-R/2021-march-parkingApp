import './BookCarPark.css'
import {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import {todaysDate, todaysTime} from '../../Services/DateTimeService'

const BookCarPark = (props) => {
    const [carPark, setCarPark] = useState({})
    let redirect = false

    useEffect(() => {
        // Requires API to allow fetching of single car park
        fetch(`http://localhost:9000/carParks/1`)
            .then(result => result.json())
            .then(data => {
                if (data.success) {
                    setCarPark(data.data)
                } else {
                    redirect = true
                }
            })
            .catch(() => {
                redirect = true
            })
    }, [])

    // if (redirect) {
    //     return <Redirect to="/availableCarParks/1" />
    // }

    return (
        <main>
            <div className="all-car-parks-header">
                <h1>Your booking</h1>
                <img src="/parking-scout-logo.svg" alt="Parking Scout Logo" />
            </div>
            <div className="back">
                <KeyboardArrowLeft /><Link to="/availableCarParks/1">Back to results</Link>
            </div>
            <article className="booking card">
                <h3>{carPark.name}</h3>
                <p>{carPark.location || ''}</p>
                <p>{(carPark.hourlyRate || '').toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'GBP'
                })} per hour</p>
                <p>Date: {todaysDate()}</p>
                <p>Start time: {todaysTime()}</p>
                <p>Duration: {props.match.params.duration || ''} hrs</p>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="name@example.com" id="email" />
                <label htmlFor="registration">Car reg</label>
                <input type="text" placeholder="ABC 123" id="registration" />
                <button>Book</button>
            </article>
        </main>
    )
}

export default BookCarPark
