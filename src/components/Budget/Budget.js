

import budgetPic from './budget.jpg'

const Budget = () => {
  return (
    <div className="card" style= {{ width: "18rem" }}>
      <img src={budgetPic} className="card-img-top" alt="BeeWell" id="beeWell" />
        <div className="card-body">
          <h3 className="card-title">Budget Tracker</h3>
          <p className="card-text">Some classmates and I built a site to help you live a healthier lifestyle by looking up recipes that can fit the workout and diet you want to live by.</p>
        <a href="https://calm-chamber-87100.herokuapp.com/" className="btn btn-primary" target="_blank">Link to Project</a>
          <p></p>
        <a href="https://github.com/Ohskie3/Budget-Tracker" className="btn btn-primary" target="_blank">Link to GitHub</a>
        </div>
</div>
  )
}

export default Budget