const DurationValidator = (duration) => {
    duration = duration || 1
    if (typeof duration === 'number') {
        return Math.round(duration)
    } else {
        return 1
    }
}

module.exports = DurationValidator
