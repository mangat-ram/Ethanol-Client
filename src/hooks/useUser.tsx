import axios from "axios";
import React, { useEffect } from "react";

const useUser = () => {

  const user = async () => {
    try {
      const res = await axios.get(`${process.env.HOST_NAME}/users/getUser`)
      return res;
    } catch (error) {
      console.log("Errror::: ",error);
    }
  }

  useEffect(() => {
    user();
  },[])
}

export default useUser;