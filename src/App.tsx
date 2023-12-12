import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import type { Todo } from './types.ts'

export default function App() {
  return (
    <>
      <main className="container mx-auto bg-stone-100">
        <h1 className="text-5xl font-bold underline mt-10 mb-5">Simple React</h1>
        <div className="flex flex-row">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
          <img src={reactLogo} className="w-20" alt="React logo" />
        </div>
        <div className="mt-5 mb-5">
          <MyButton />
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-96 mt-5 mb-5">
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Todo Item
            </h5>
            <Todo />
          </div>
        </div>
        <img src="https://placehold.co/768x100/857979/FFF" alt="simple placeholder" />
        <img src="https://placehold.co/1024x100/696362/FFF" alt="simple placeholder" />
        <img src="https://placehold.co/1280x100/363232/FFF" alt="simple placeholder" />
      </main>
    </>
  )
}

function MyButton() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        className="px-8 py-4 text-2xl text-white bg-blue-500 rounded"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  )
}

function Todo() {
  const [item, setItem] = useState<Todo | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {
          setItem(json)
          setIsLoading(false)
        })
    }, 3000)
  }, [])

  if (isLoading) {
    return <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  }

  return (
    <div>
      {item && (
        <div>
          <p>User ID: {item.userId}</p>
          <p>ID: {item.id}</p>
          <p>Title: {item.title}</p>
          <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  )
}
