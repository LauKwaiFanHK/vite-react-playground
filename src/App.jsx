import { useState } from 'react'
import { Button, TextArea } from '@carbon/react'

import './App.scss'

function App() {

  return (
    <>
      <TextArea
        id="text-input"
        invalidText="A valid value is required"
        labelText="Text input label"
        placeholder="Placeholder text"
      />
      <Button kind="primary">Button</Button>
    </>
  )
}

export default App
