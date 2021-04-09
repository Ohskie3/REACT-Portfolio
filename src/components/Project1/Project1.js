import beeWell from './BeeWell.png'


const Project1 = () => {
  return (
    <div className="card" style= {{ width: "18rem" }}>
      <img src={beeWell} className="card-img-top" alt="BeeWell" id="beeWell" />
        <div className="card-body">
          <h5 className="card-title">BeeWell Project</h5>
          <p className="card-text">Some classmates and I built a site to help you live a healthier lifestyle by looking up recipes that can fit the workout and diet you want to live by.</p>
          <a href="https://ohskie3.github.io/Project-1/" className="btn btn-primary" target="_blank">Link to Project</a>
        </div>
</div>
  )
}

export default Project1