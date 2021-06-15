import './SearchResults.css'
import Search from './../Search/Search'
import AvailableCarPark from "../AvailableCarPark/AvailableCarPark"
import {useEffect, useState} from 'react'
import NoCarParks from "../NoCarParks/NoCarParks"

const SearchResults = () => {
    const[availableCarParks, setCarParks] = useState([])

    const displayAvailableCarParks = (availableCarParks) => {
        return availableCarParks.map((availableCarPark) => {
            return <AvailableCarPark key={availableCarPark._id} name={availableCarPark.name} location={availableCarPark.location} availableSpaces={availableCarPark.availableSpaces} hourlyRate={availableCarPark.hourlyRate} />
        })
    }

    useEffect(() => {
        fetch('http://localhost:9000/availableCarParks')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCarParks(displayAvailableCarParks(data.data))
                } else {
                    setCarParks(<NoCarParks />)
                }
            })
            .catch(() => setCarParks(<NoCarParks />))
    },[])

    return (
        <main className="search-results-container">
            <div className="search-results-header">
                <h1>Search results</h1>
                <img src="parking-scout-logo.svg" alt="Parking Scout Logo" />
            </div>
            <Search />
            <h6>Available car parks</h6>
            {availableCarParks}
        </main>
    )
}

export default SearchResults