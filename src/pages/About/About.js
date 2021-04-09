 import hayley from './withhayley.jpg'

const About = () => {
  return (
    <>
    <h1>About Me</h1>

      <div className="card" style={{ width: "18rem" }}>
        <img src={hayley} className="card-img-top" alt="Me with Hayley" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
    </div>
    </>
  )
}

export default About