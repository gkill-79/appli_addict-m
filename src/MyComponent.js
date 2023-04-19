

import React, { useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>My React Component</div>;
};

export default MyComponent;

















