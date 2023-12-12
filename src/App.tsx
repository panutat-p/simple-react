import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {
  return (
    <>
      <main className="container mx-auto">
        <h1 className="text-5xl font-bold underline mt-10 mb-5">Simple React</h1>
        <div className="flex flex-row">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
          <img src={reactLogo} className="w-20" alt="React logo" />
        </div>
        <div className="mt-5 mb-5">
          <MyButton />
        </div>
        <img src="https://placehold.co/300x200/000000/FFF" alt="simple placeholder" />
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
