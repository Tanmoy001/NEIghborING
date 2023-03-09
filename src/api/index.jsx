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
            'X-RapidAPI-Key': '27702d5d27msh98284803884f185p156085jsn9f40a7f2295a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
     
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
        
    }
}
