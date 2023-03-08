// Applying middleware

const logger = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

// Adding a new Pokemon with middleware

const featuring = (store) => (next) => (action) => {
  const featured = [{ name: 'Eddie' }, ...action.action.payload]
  const updatedAction = {
    ...action,
    action: { ...action.action, payload: featured }
  }
  next(updatedAction)
}
// const prefixName = (store) => (next) => (action) => {
//   const prefix = action.action.payload.map((pokemon) => ({
//     ...pokemon,
//     name: 'Poke' + pokemon.name
//   }))
//   const update = {
//     ...action,
//     action: { ...action.action, payload: prefix }
//   }
//   next(update)
// }
export { logger }
export { featuring }
// export { prefixName }
