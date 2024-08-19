// import { useState } from 'react'
import './App.css'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Book } from './types'

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`

// console.log(BOOKS);
// この状態だと複雑な階層構造

function Books() {
  const { loading, error, data } = useQuery(BOOKS);
  // console.log(data);

  if (loading) return <p>Loading...</p>
  if (error) return <>Error: {error.message}</>
  
  return data.books.map(({title, author}: Book) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ))
}

function App() {
  return (
    <>
      <h2>GraphQL Client</h2>
      <Books />
    </>
  )
}

export default App
