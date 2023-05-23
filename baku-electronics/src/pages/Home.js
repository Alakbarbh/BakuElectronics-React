import React from 'react'
import Header from '../components/layout/Header'
import Main from '../components/Main'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default Home
