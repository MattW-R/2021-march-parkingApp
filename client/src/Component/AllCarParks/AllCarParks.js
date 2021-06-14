import './AllCarParks.css'
import CarPark from './../CarPark/CarPark'

const allCarParks = () => {
    return (
        <main>
            <CarPark name="Avon Street" location="Bath BA1 1UF" totalSpaces="1" hourlyRate="3.2" />
            <CarPark name="Avon Street" location="Bath BA1 1UF" totalSpaces="1" hourlyRate="3.2" />
            <CarPark name="Avon Street" location="Bath BA1 1UF" totalSpaces="1" hourlyRate="3.2" />
        </main>
    )
}

export default allCarParks
