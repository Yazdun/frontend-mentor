export const filterError = ({ errors, name }) => {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})

  return filtered
}

export const isError = err => {
  if (Object.keys(err).length > 0) return true
  return false
}
