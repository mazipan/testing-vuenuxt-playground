const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    nextOffset
    prevOffset
    status
    message
    results {
      id
      url
      name
      image
    }
  }
}`

const gqlVariables = {
  limit: 10,
  offset: 1
}

export const getAllPokemons = async () => {
  const res = await fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables
    }),
    method: 'POST'
  })

  return await res.json()
}
