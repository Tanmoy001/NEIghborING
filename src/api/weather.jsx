import axios from 'axios'




export const getTempsData = async (lat,lng)=>{
   
    try {
        const URL= `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?unitGroup=us&key=23FF36AZPE75SCTYHUPXH5U6U`;
        
        
        const data = await axios.get(URL);
        
        return data.data;
    } catch (error) {
        console.log(error);
        
    }
  }

  export const getCordi = async (area)=>{
    try {
        const URL= `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${area}?key=23FF36AZPE75SCTYHUPXH5U6U`;
        
        const data = await axios.get(URL);
        
        return data.data;
    } catch (error) {
        console.log(error);
        
    }
  }
  