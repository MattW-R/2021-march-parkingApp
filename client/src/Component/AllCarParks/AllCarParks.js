import './AllCarParks.css'
import CarPark from './../CarPark/CarPark'

const allCarParks = () => {
    return (
        <main>
            <div className="all-car-parks-header">
                <h1>All car parks</h1>
                <img src="parking-scout-logo.svg" alt="Parking Scout Logo" />
            </div>
            <CarPark name="Avon Street" location="Bath BA1 1UF" totalSpaces="1" hourlyRate="3.2" />
            <CarPark name="Avon Street" location="Bath BA1 1UF" totalSpaces="1" hourlyRate="3.2" />
            <CarPark name="Avon Street" location="Bath BA1 1UF" totalSpaces="1" hourlyRate="3.2" />
        </main>
    )
}

export default allCarParks
