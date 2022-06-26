import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "HTML5_skill", 
          content: "HTML5", 
          porcentage: "80%", 
          value: "80"
       },
        { 
          id: "CSS3_skill", 
          content: "CSS3", 
          porcentage: "75%", 
          value: "75" 
        },
        {
          id: "JavaScript_skill",
          content: "Java",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "40%",
          value: "40"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi, I am currently an undergraduate student in the University of Puerto Rico in Mayagüez, majoring in Computer Science and Engineering. "
        },
        {
          id: "second-p-about",
          content:
            "I have worked in various areas including, front-end development with ReactJS, Project Management, CI/CD with Jenkins, Spring Framework, and Back-end development using Java."        },
        {
          id: "third-p-about",
          content:
            "I am interested in diving deeper with about Human-Computer Interaction, wanting to have more experience with Front-end development, UX/UI Design, and Backend-development.  "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0 about-me-text">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
