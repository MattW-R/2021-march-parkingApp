import './AllCarParks.css'
import CarPark from './../CarPark/CarPark'
import {useEffect, useState} from "react"

const AllCarParks = () => {
    const[carParks, setCarParks] = useState([])
    useEffect(()=>{
        fetch('localhost:9000/carParks')
            .then(res=> res.json())
            .then(data=> {
                if (data.success){
                    setCarParks(data.data)
                }
            })
    },[])
    const displayCarParks = () => {
        return carParks.map((carPark)=>{
            return <CarPark key={carPark._id} name={carPark.name} location={carPark.location} totalSpaces={carPark.totalSpaces} hourlyRate={carPark.hourlyRate} />

        })
    }
    return (
        <main>
            <div className="all-car-parks-header">
                <h1>All car parks</h1>
                <img src="parking-scout-logo.svg" alt="Parking Scout Logo" />
            </div>
            {displayCarParks()}
        </main>
    )
}

export default AllCarParks
