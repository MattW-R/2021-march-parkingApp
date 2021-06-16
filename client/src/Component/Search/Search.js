import './Search.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Search = (props) => {

    let duration = props.duration || 1

    let today = new Date()

    const todaysDate = (today) => {
        let day = today.getDate()
        let month = today.getMonth() + 1
        let year = today.getFullYear().toString().slice(-2)
        today = day + '-' + month + '-' + year
        return today
    }

    const todaysTime = (today) => {
        const hour = today.getHours()
        const minutes = today.getMinutes()
        if (minutes <30) {
            today = hour + ':' + '00'
        } else {
            today = hour+1 + ':' + '00'
        }
        return today
    }

    const [value, setValue] = useState(duration)
    const handleSelect = (e) => {
        setValue(e.target.selectedOptions[0].value)
    }

    return (
        <section className="search-container">
            <div className="search-inputs-container">
                <div className="search-input-container">
                    <p>Date</p>
                    <h6>{todaysDate(today)}</h6>
                </div>
                <div className="search-input-container">
                    <p>Time</p>
                    <h6>{todaysTime(today)}</h6>
                </div>
                <div className="search-input-container">
                    <p>Duration</p>
                    <select defaultValue={duration} onChange={handleSelect}>
                        <option value="1">1 hr</option>
                        <option value="2">2 hrs</option>
                        <option value="3">3 hrs</option>
                        <option value="4">4 hrs</option>
                        <option value="5">5 hrs</option>
                        <option value="6">6 hrs</option>
                        <option value="7">7 hrs</option>
                        <option value="8">8 hrs</option>
                    </select>
                </div>
            </div>
            <div className="search-button">
                <Link to={`/availableCarParks/${value}`}>Search</Link>
            </div>
        </section>
    )
}

export default Search