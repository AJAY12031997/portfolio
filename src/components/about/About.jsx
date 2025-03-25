import "./about.css";
import Award from "../../img/award.png";
import aboutme from "../../img/aboutme.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={aboutme} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Frontend Developer
        </p>
        <p className="a-desc">
          Hi, I’m, a Frontend Developer with 4 years of experience in
          building dynamic and responsive web applications. I specialize in
          React.js, JavaScript, Redux, HTML, CSS, Bootstrap, and Git. I’m passionate
          about creating clean, efficient, and visually appealing user
          interfaces that enhance the user experience. With a strong foundation
          in frontend technologies and a keen eye for detail, I enjoy turning
          ideas into functional and interactive websites. Let’s collaborate and
          build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
