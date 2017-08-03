function errReplacer (key, value) {
  if (value instanceof Error) {
    const error = {}

    Object.getOwnPropertyNames(value).forEach(key => {
      error[key] = value[key]
    })

    return error
  }

  return value
}

module.exports = errReplacer
