import './BookCarPark.css'
import {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import {todaysDate, todaysTime} from '../../Services/DateTimeService'

const BookCarPark = (props) => {
    const [carPark, setCarPark] = useState({})
    const [redirect, setRedirect] = useState(false)
    const [redirectRoute, setRedirectRoute] = useState('/availableCarParks/1')
const HandleBookingButton = () => {
        const HandleBooking ={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                carParkId: props.match.params.id,
                email: document.getElementById('email').value,
                registration: document.getElementById('registration').value

            })
        }
        fetch(`http://localhost:9000/bookings/`,HandleBooking)
            .then(response => response.json())
            .then(data=> {
                if (data.success){
                    setRedirectRoute(`/bookingSuccess/${data.data._id}`)
                    setRedirect(true)
                }
            })
}
    useEffect(() => {
        // Requires API to allow fetching of single car park
        fetch(`http://localhost:9000/carParks/${props.match.params.id}`)
            .then(result => result.json())
            .then(data => {
                if (data.success) {
                    setCarPark(data.data)
                } else {
                    setRedirect( true)
                }
            })
            .catch(() => {
                setRedirect( true)
            })
    }, [])

    // if (redirect) {
    //     return <Redirect to={redirectRoute} />
    // }

    return (
        <main>
            <div className="all-car-parks-header">
                <h1>Your booking</h1>
                <img src="/parking-scout-logo.svg" alt="Parking Scout Logo" />
            </div>
            <div className="back">
                <KeyboardArrowLeft /><Link to={`/availableCarParks/${props.match.params.duration}`}>Back to results</Link>
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
                <button onClick={HandleBookingButton}>Book</button>
            </article>
        </main>
    )
}

export default BookCarPark
