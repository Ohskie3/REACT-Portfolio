import gramLogo from './reinstagram.png'


const FeedMe = () => {
  return (
    <div className="card" style= {{ width: "18rem" }}>
      <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/626/5308215626_d945acf3-4dcd-4b1f-bc88-d8f66e48d54e.png?cb=1621536314" className="card-img-top" alt="FeedMe" id="FeedMe" />
        <div className="card-body">
          <h3 className="card-title">FeedMe Project</h3>
          <p className="card-text">Some classmates and I built a new social media site that is modeled after the poopular site Instagram, that focusses on people making posts focussed on food.</p>
        <a href="https://mighty-mesa-72754.herokuapp.com/" className="btn btn-primary" target="_blank">Link to Project</a>
        <p></p>
        <a href="https://github.com/Ohskie3/reinstagram" className="btn btn-primary" target="_blank">Link to GitHub</a>
        </div>
</div>
  )
}

export default FeedMe