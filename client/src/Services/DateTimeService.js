const formatDate = (today) => {
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear().toString().slice(-2)
    return day + '-' + month + '-' + year
}

const todaysDate = () => {
    let today = new Date()
    return formatDate(today)
}

const formatTime = (today) => {
    const hour = today.getHours()
    const minutes = today.getMinutes()
    if (minutes <30) {
        return hour + ':' + '00'
    } else {
        return hour+1 + ':' + '00'
    }
}

const todaysTime = () => {
    let today = new Date()
    return formatTime(today)
}

export { formatDate, todaysDate, formatTime, todaysTime }
