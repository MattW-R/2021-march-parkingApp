import './AvailableCarPark.css'

const AvailableCarPark = (props) => {
    return (
        <article className="card">
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>{props.availableSpaces} available spaces</p>
            <p>{(props.hourlyRate).toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP'
            })} per hour</p>
        </article>
    )
}

export default AvailableCarPark