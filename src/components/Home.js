import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>
          hello, i'm <span className="name-highlight">[ryan]</span>
        </h1>
        <p className="description">i like to build stuff.</p>
        <div className="cta-buttons">
          <a
            href="/resumes/Ryan_Ngo_Resume_v.1.1.2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-resume"
          >
            Resume/CV
          </a>
        </div>
        <div className="contact-container">
          <h3>Contact Me:</h3>
          <h3>Email: <span className="email-highlight">ryanvngo@gmail.com</span></h3>
        </div>
      </div>
      <div className="home-image">
        <img
          src="./images/ryan-ngo.jpg"
          alt="profile illustration"
          className="profile-img"
        />
      </div>
    </div>
  );
};

export default Home;
