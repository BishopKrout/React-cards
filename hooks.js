import { useState } from 'react';
import axios from 'axios';

// useFlip hook
export function useFlip(initialFlipState = false) {
  const [isFlipped, setIsFlipped] = useState(initialFlipState);

  const toggleFlip = () => {
    setIsFlipped((flipState) => !flipState);
  };

  return [isFlipped, toggleFlip];
}

// useAxios hook
export function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (endpoint = "") => {
    const response = await axios.get(baseUrl + endpoint);
    setData((prevData) => [...prevData, response.data]);
  };

  return [data, addData];
}
 export default useFlip;