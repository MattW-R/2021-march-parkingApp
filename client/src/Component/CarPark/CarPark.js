import "./CarPark.css"

const carPark= (props) => {
    return (
        <article className="card">
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>{props.totalSpaces} total spaces</p>
            <p>£{props.hourlyRate} per hour</p>
        </article>
    )
}

export default carPark