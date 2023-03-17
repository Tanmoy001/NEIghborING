import axios from 'axios'




export const getTempsData = async (lat,lng)=>{
    try {
        const URL= `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?unitGroup=us&key=23FF36AZPE75SCTYHUPXH5U6U`;
        console.log(lat,lng,URL,'latand lng')
        const data = await axios.get(URL);
        
        return data.data;
    } catch (error) {
        console.log(error);
        
    }
  }
  