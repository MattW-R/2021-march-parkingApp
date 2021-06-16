import './Home.css'
import Search from './../Search/Search'

const Home = () => {
    return (
        <main className="home-header">
                <div className="home-header-container">
                    <img className="home-header-logo" src="parking-scout-logo.svg" alt="Parking Scout Logo" />
                    <h1>Parking Scout</h1>
                </div>
                <Search />
                <div className="home-button-container">
                    <a href="./all"><button className="secondary-button">View all car parks</button></a>
                </div>
                <img className="home-img-container" src="city-driver.svg" alt="Woman with a red car" />
        </main>
    )
}

export default Home

//e target event listener value of option selection onclick