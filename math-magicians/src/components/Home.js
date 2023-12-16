import React from 'react'

function Home() {
  return (
    <div className='container'>
      <h1>Welcome to My Website!</h1>
      <p>
        Embark on a journey of discovery and knowledge with our single-page React website. Our platform is designed to cater to a diverse audience, offering a blend of educational resources, interactive tools, and inspirational quotes.
      </p>
      <p>
        At the heart of our website are three distinct sections:
      </p>
      <ul>
        <li>
          <strong>Home:</strong> Begin your exploration here. Gain insights into the vision and mission of our platform. Learn how we aim to make learning engaging and accessible to everyone.
        </li>
        <li>
          <strong>Calculator:</strong> Immerse yourself in the world of mathematics with our interactive calculator. Whether you're a student looking for assistance with homework or a math enthusiast exploring new concepts, our calculator is here to assist you.
        </li>
        <li>
          <strong>Quote:</strong> Seek inspiration from the wisdom of renowned mathematicians and thinkers. Each quote is carefully selected to ignite curiosity, creativity, and a love for learning.
        </li>
      </ul>
      <p>
        Our commitment is to create an environment where learning is not only informative but also enjoyable. Whether you're a seasoned mathematician or someone taking their first steps into the world of numbers, we have something for you.
      </p>
      <p>
        As you navigate through our website, feel free to engage with the content, share your thoughts, and let the pursuit of knowledge be an enriching experience. We invite you to be a part of our community and share in the joy of learning.
      </p>
      <p>
        Thank you for choosing our platform. Enjoy your stay and happy learning!
      </p>
      <footer style={{ marginTop: '30px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center' }}>
        Created By Rana Wajahat Saleem
      </footer>
    </div>
  )
}

export default Home