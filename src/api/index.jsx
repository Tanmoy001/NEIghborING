import axios from 'axios'
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'



export const getPlacesData = async (lat,lng)=>{
  try {
      const {data:{data}} = await axios.get(URL,{
 
        params: {
          latitude: lat,
          longitude: lng,
         
        },
        headers: {
          'X-RapidAPI-Key': '621f84515fmsh8f2eb5cfbd49899p1d3690jsn6dec2261face',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
      

      return data;
  } catch (error) {
      console.log(error);
      
  }
}
