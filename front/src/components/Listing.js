import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Listing(props) {

  const [available, setAvailable] = useState(true);

  const accept = (event) => {
      setAvailable(!available);
      handleAccept(event);
  };

  const jobid = props.id;
  const school = props.school;
  const teacher = props.teacher;
  const grade = props.grade;
  const subject = props.subject;
  const accepted = props.accepted;


  const handleAccept = async (event) => {

    const updateAccept = {
      id: props.id,
      school: props.school,
      teacher: props.teacher,
      grade: props.grade,
      subject: props.subject,
      accepted: true
    }

    try {
        const response = await axios.put('http://localhost:8000/path/jobs/'+jobid, updateAccept, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
          console.log(response.data); // Handle success
        }

    } catch (error) {
        console.error(error.response.data); // Handle error
    }
};



  if (available === true && accepted === false) {
    return (

      <div className="job-listing">
  
          <h3>Job Listing</h3>
          <div className="job-details">
            <p><strong>School: </strong>{school}</p>
            <p><strong>Teacher: </strong> {teacher}</p>
            <p><strong>Grade: </strong> {grade}</p>
            <p><strong>Subject: </strong> {subject}</p>
  
            <button onClick={accept}>
                  {available ? 'Accept job' : 'Accepted!'}
            </button>
          </div>

      </div>
  
    );
  } else {
    return(null);
  }
};

export default Listing;
