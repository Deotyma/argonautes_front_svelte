import axios from "axios";
export let argonautes   

export const getAllArgonautes = async ()=>{
  try {
      const response = await axios.get(`http://localhost:8000/api/argonautes`);
      return argonautes = response.data;;
  } catch (err) {
      console.log(err);
  }
  }

export const getArgonauteById = (id) => {
  return axios.get("http://localhost:8000/api/argonautes" + id);
};