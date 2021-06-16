const todaysDate = () => {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear().toString().slice(-2)
    today = day + '-' + month + '-' + year
    return today
}

const todaysTime = () => {
    let today = new Date()
    const hour = today.getHours()
    const minutes = today.getMinutes()
    if (minutes <30) {
        today = hour + ':' + '00'
    } else {
        today = hour+1 + ':' + '00'
    }
    return today
}

export { todaysDate, todaysTime }
