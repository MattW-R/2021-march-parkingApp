import './BookingSuccess.css'
import {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import {todaysDate, todaysTime} from '../../Services/DateTimeService'

const BookingSuccess = (props) => {
    const [carPark, setCarPark] = useState({})
    const [booking, setBooking] = useState({})
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        // Requires API to allow fetching of single car park
        fetch(`http://localhost:9000/bookings/${props.match.params.id}`)
            .then(result => result.json())
            .then(data => {
                if (data.success) {
                    setBooking(data.data)
                    fetch(`http://localhost:9000/carParks/${data.data.carParkId}`)
                        .then(result => result.json())
                        .then(data=> {
                            if (data.success){
                                setCarPark(data.data)
                            } else {
                                setRedirect(true)
                            }
                        })
                        .catch(()=> {
                            setRedirect(true)
                        })
                } else {
                    setRedirect( true)
                }
            })
            .catch(() => {
                setRedirect( true)
            })
    }, [])

    // if (redirect) {
    //     return <Redirect to="/" />
    // }

    return (
        <main>
            <div className="all-car-parks-header">
                <h1>Your booking</h1>
                <img src="/parking-scout-logo.svg" alt="Parking Scout Logo" />
            </div>
            <div className="bookingSuccessPanel">
                Success!
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
                <p>Email: {booking.email} </p>
                <p>Car reg: {booking.registration} </p>
                <Link className="backToHomeButton" to="/">Back to home</Link>
            </article>
        </main>
    )
}

export default BookingSuccess
