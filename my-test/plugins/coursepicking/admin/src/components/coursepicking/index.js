import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@buffetjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from '@buffetjs/styles';

    const divStyle = {
      color: 'blue',
      height:'500px'
    };
    const leftContainer = {
        float:'left',
        background: '#33C1FF',
        width:'48%',
        height:'100%'
      };
    
      const rightContainer = {
        float:'right',
        background: '#33C1FF',
        width:'48%',
        height:'100%'
      };  
    const marginTop={
        marginTop:'5%'
    };

    const courseButton={
        float:'center',
        width: '100%',
        height: '60px',
        marginTop:'10%'
    };
    
    const courseContainer={
        float:'center',
    };
    const termContainer={
        float:'center',
    };

    

    class CoursesPicking extends Component {
        state = {
          courses: [],
            error: null,
          };

          componentDidMount = async () => {
            try {
              const response = await axios.get('http://localhost:1337/courses');
              this.setState({ courses: response.data });
            } catch (error) {
              this.setState({ error });
            }
          };

        
           

      render() {
        const { error, course } = this.state;
        return (

            <div className="container-lg" style={divStyle}>
                <div class="alert alert-primary" role="alert">
                Pitt-Health Informatics Banner
                </div>
                <div class="container" name="leftContainer" style={leftContainer}>
                <div class="alert alert-primary" role="alert" style={marginTop}>
                Selection of Coureses
                </div>
                <div class="container" style={courseContainer}>
            
                <ul>
                {this.state.courses.map(course => (
                <button type="button" class="btn btn-secondary btn-lg" style={courseButton} key={course.id}>{course.courseName}</button>,
                <button type="button" class="btn btn-secondary btn-lg" style={courseButton} key={course.id}>{course.courseName}</button>,
                <button type="button" class="btn btn-secondary btn-lg" style={courseButton} key={course.id}>{course.courseName}</button>
                ))}
                </ul>
                </div>
                
                <p>{this.state.value}</p>
                </div>
                <div class="container" name="rightContainer" style={rightContainer}>
                <div class="alert alert-primary" role="alert" style={marginTop}>
                Term
                </div>
                    <div class="container" name="termContainer" style={termContainer}>
                    <button type="button" class="btn btn-warning" style={courseButton}>Large button</button>
                    <button type="button" class="btn btn-secondary btn-lg" style={courseButton}>Large button</button>
                    <button type="button" class="btn btn-secondary btn-lg" style={courseButton}>Large button</button>
                    </div>
                </div>
                {console.log(this.state.students)}
            </div>
        );
    }
}
export default CoursesPicking;
