import './App.scss'
import Button from '@/components/button/Button.tsx'

function App() {
  return (
    <main>
      <h1>Temporal playground</h1>
      <Button onClick={() => {
        console.log('Primary button')
      }}>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="text">Only text</Button>
    </main>
  )
}

export default App
