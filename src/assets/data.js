export const getData = async () =>  {
    const url = "http://127.0.0.1:5000/data";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json
    } catch (error) {
      console.error(error.message);
    }
}

export const getPlan = async (arguements) =>{
    const url = "http://127.0.0.1:5000/plan?no_of_plans=5&" + arguements;
    console.log(url)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json
    } catch (error) {
      console.error(error.message);
    }
}
  