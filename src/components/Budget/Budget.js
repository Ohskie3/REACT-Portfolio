

import budgetPic from './budget.jpg'

const Budget = () => {
  return (
    <div className="card" style= {{ width: "18rem" }}>
      <img src={budgetPic} className="card-img-top" alt="BeeWell" id="beeWell" />
        <div className="card-body">
          <h3 className="card-title">Budget Tracker</h3>
          <p className="card-text">This is an application I put together that is a budget tracker to help you manage a budget.</p>
        <a href="https://calm-chamber-87100.herokuapp.com/" className="btn btn-primary" target="_blank">Link to Project</a>
          <p></p>
        <a href="https://github.com/Ohskie3/Budget-Tracker" className="btn btn-primary" target="_blank">Link to GitHub</a>
      
        </div>
</div>
  )
}

export default Budget