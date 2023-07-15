
const Footer = () => {
  return (
    <footer className="bg-opacity-10">
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h6 className="fw-bold">content</h6>
            <ul className="list-unstyled">
              <li>Mobile : 348592837489</li>
              <li>Age : 22</li>
              <li>Address : Dhaka 34 Road 8592837489</li>
              <li>Gmail : nirapdakpal!@gmail.com</li>
          
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Browse</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Notes</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li>Note-taking Assistant</li>
              <li>Feedback Collector</li>
              <li>Task Tracker</li>
              <li>Message Board</li>
              <li>Quote Generator</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-1">
            <span>
              <span className="me-1">
              </span>
              Copyright 2023
            </span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
