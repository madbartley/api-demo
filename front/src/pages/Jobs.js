import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listing from '../components/Listing.js'

function Jobs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/path/jobs/');
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const resetAccepted = async (event) => {

    const resetter = {
      accepted: false
    }
    let jobid = 0;

    try {
      let i = 0;
      while(i < data.length) {
        jobid = data[i].id
        const response = await axios.patch('http://localhost:8000/path/jobs/'+jobid, resetter, {
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (response.status === 201) {
        console.log(response.data); // Handle success
      }

      i++;

    }

  } catch (error) {
      console.error(error.response.data); // Handle error
  }
      
};


  return (
    <div className = "cardcontainer">

      <button onClick={resetAccepted}>Click to set all jobs as unaccepted! This button has no state, so remember to refresh the page!</button>

      <div>
        {data.map(item => (

            <Listing key={item.id}
            id = {item.id}
            school = {item.school}
            teacher = {item.teacher}
            grade = {item.grade}
            subject = {item.subject}
            accepted = {item.accepted}/>

      ))}
      </div>
    </div>
  );
};

export default Jobs;
