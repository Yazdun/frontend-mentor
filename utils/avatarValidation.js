export const avatarIsValid = avatar => {
  const valids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const isValid = valids.filter(item => {
    return item === avatar
  })

  return isValid.length === 1
}
