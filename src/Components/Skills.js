import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";

class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div className="skillsSection centerElements">
          <form className="submitSkills centerElements">
            <div className=" title centerElements">
              <h5>Skills Section</h5>
            </div>
            <input placeholder="Skill Name" />
            <input placeholder="Experience" />
            <div className="buttonSection centerElements">
              <button>SUBMIT</button>
            </div>
          </form>

          <div className="actionsOnSkills centerElements">
            <div className="skill centerElements">
              <p className="skillName">skill name</p>
              <p className="skillExperience">skill Experience</p>
              <button>UPDATE</button>
              <button className="deleteSkill">DELETE</button>
            </div>
            <div className="skill centerElements">
              <p className="skillName">skill name</p>
              <p className="skillExperience">skill Experience</p>
              <button>UPDATE</button>
              <button className="deleteSkill">DELETE</button>
            </div>
            <div className="skill centerElements">
              <p className="skillName">skill name</p>
              <p className="skillExperience">skill Experience</p>
              <button>UPDATE</button>
              <button className="deleteSkill">DELETE</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Skills;
