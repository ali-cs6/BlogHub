import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className="py-8 bg-bgLight flex items-center justify-center">
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost