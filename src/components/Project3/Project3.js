import gramLogo from './reinstagram.png'


const reinstagram = () => {
  return (
    <div className="card" style= {{ width: "18rem" }}>
      <img src={gramLogo} className="card-img-top" alt="reinstagram" id="reinstagram" />
        <div className="card-body">
          <h3 className="card-title">re-Instagram Project</h3>
          <p className="card-text">Some classmates and I built a new social media site that is modeled after the poopular site Instagram.</p>
        <a href="https://mighty-mesa-72754.herokuapp.com/" className="btn btn-primary" target="_blank">Link to Project</a>
        <p></p>
        <a href="https://github.com/Ohskie3/reinstagram" className="btn btn-primary" target="_blank">Link to GitHub</a>
        </div>
</div>
  )
}

export default reinstagram