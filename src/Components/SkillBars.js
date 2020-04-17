import React from 'react'
import VizSensor from 'react-visibility-sensor';

class SkillBars extends React.Component {
    constructor(props) {
      super(props);
      this.state = { collapsed: true };       
      this.onChange = this.onChange.bind(this)
    }
    
    /*
    componentDidMount() {
        setTimeout(() => {
        this.setState({ collapsed: false })
      }, 1000);
      
    }
    */
    onChange(isVisible) {
      if (isVisible) {
        setTimeout(() => {
          this.setState({ collapsed: false })
        }, 400);
      }
    }

    render() {
      const { collapsed } = this.state;
      const { hue, saturation, skills } = this.props;
  
      return(
        <div>
        <VizSensor onChange={this.onChange}>
            <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
              <ul className="skills">
                {skills.map((skill, index) => 
                  <li
                    key={skill.type}
                    style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
                  >
                    <p>{skill.type}<span>{skill.level}%</span></p>
                  </li>
                )}
              </ul>
            </div>
        </VizSensor>
        </div>
        
      )
    }
  }

  export default SkillBars