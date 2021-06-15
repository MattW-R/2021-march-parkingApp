const DurationValidator = (duration) => {
    duration = duration || 1
    duration = parseFloat(duration)
    if (typeof duration === 'number' && !isNaN(duration)) {
        return Math.round(duration)
    } else {
        return 1
    }
}

module.exports = DurationValidator
