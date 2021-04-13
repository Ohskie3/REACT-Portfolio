import freeMarket from './freeMarketLogo.png'


const FreeMarket = () => {
  return (
    <div className="card" style= {{ width: "18rem" }}>
      <img src={freeMarket} className="card-img-top" alt="FreeMarket" id="FreeMarket" />
        <div className="card-body">
          <h3 className="card-title">Free Market Project</h3>
          <p className="card-text">Some classmates and I built a site to help you get rid of old things for free. You can create a pofile allowing you to view and post items</p>
        <a href="https://mighty-coast-38363.herokuapp.com/" className="btn btn-primary" target="_blank">Link to Project</a>
        <p></p>
        <a href="https://github.com/Ohskie3/FreeMarket" className="btn btn-primary" target="_blank">Link to GitHub</a>
        </div>
</div>
  )
}

export default FreeMarket