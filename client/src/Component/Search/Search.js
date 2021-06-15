import './Search.css'

const Search = () => {

    const todaysDate = () => {
        return new Date();
    }

    return (
        <section className="search-container">
            <div className="search-inputs-container">
                <div className="search-input-container">
                    <p>Date</p>
                    <h6>{todaysDate}</h6>
                </div>
                <div className="search-input-container">
                    <p>Time</p>
                    <h6>Today's time now</h6>
                </div>
                <div className="search-input-container">
                    <p>Duration</p>
                    <select>
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
            <div>
                <button className="primary-button">Search</button>
            </div>
        </section>
    )
}

export default Search