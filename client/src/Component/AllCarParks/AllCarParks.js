import './AllCarParks.css'
import CarPark from './../CarPark/CarPark'
import {useEffect, useState} from 'react'
import NoCarParks from '../NoCarParks/NoCarParks'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

const AllCarParks = () => {
    const[carParks, setCarParks] = useState([])

    const displayCarParks = (carParks) => {
        return carParks.map((carPark) => {
            return <CarPark key={carPark._id} name={carPark.name} location={carPark.location} totalSpaces={carPark.totalSpaces} hourlyRate={carPark.hourlyRate} />
        })
    }

    useEffect(() => {
        fetch('http://localhost:9000/carParks')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCarParks(displayCarParks(data.data))
                } else {
                    setCarParks(<NoCarParks />)
                }
            })
            .catch(() => setCarParks(<NoCarParks />))
    },[])

    return (
        <main>
            <div className="all-car-parks-header">
                <h1>All car parks</h1>
                <img src="/parking-scout-logo.svg" alt="Parking Scout Logo" />
            </div>
            <div className="back">
                <KeyboardArrowLeft /><a href="./">Back to home</a>
            </div>
            {carParks}
        </main>
    )
}

export default AllCarParks
