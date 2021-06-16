import './Search.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Search = () => {
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
    //
    //
    // const generateArray = () => {
    //     let hours
    //     for (hours = 1; hours <= 12; hours++ + 'hrs') {
    //     console.log (hours)
    //     }
    // }
    //
    //
    //
    //
    // const generateOptions = (hours) => {
    //         hours.forEach(hours => {
    //             return hours + ' hrs'
    //         })}
    //


    // let animals = ['chipmunk', 'gopher', 'marmot']
    // animals.forEach(function (animal) {
    //     console.log(animal)
    // })

    // for (let step = 0; step < 5; step++) {
    //     // Runs 5 times, with values of step 0 through 4.
    //     console.log('Walking east one step');
    // }

    // const strings = ['Home', 'Shop', 'About Me'];
    // const listItems = strings.map(string => <li>{string}</li>);
    // <ul>{listItems}</ul>
    //

    const [value, setValue] = useState('1')
    const handleSelect = (e) => {
        setValue(e.target.selectedOptions[0].value)
    }
    console.log (value)

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
                    <select onChange={handleSelect}>
                        {/*{listDurationOptions}*/}
                        <option value="1">1 hr</option>
                        <option value="2">2 hrs</option>
                        <option value="3">3 hrs</option>
                        <option value="4">4 hrs</option>
                        <option value="5">5 hrs</option>
                        <option value="6">6 hrs</option>
                        <option value="7">7 hrs</option>
                    </select>
                </div>
            </div>
            <div className="search-button">
                <Link to={`availableCarParks/${value}`}>Search</Link>
            </div>
        </section>
    )
}

export default Search