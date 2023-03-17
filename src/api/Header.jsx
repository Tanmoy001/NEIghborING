// import React, { useEffect } from 'react'
// import './Header.css'
// import { AiOutlineSearch } from 'react-icons/ai';
// function Header({lat,lng}) {
//     useEffect(()=>{
//         async function fetchData() {
//         const url = ` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?key=23FF36AZPE75SCTYHUPXH5U6U `;
//     let data = await fetch(url);
    
//     console.log(data);
//         }
//         fetchData();
//     })
   
//   return (
//     <div className='container Header_container'>
//         <div className='header_position'>
   
//             <h3>Travel Helper</h3>
//             <h4>Explore new places</h4>
        
//         <div className='container search_bar'>
//             <div className='search_icon'>
//             <AiOutlineSearch/>
//             </div>
//             <div className="col">
//                 <div className="inputBox textarea">
//                     <input type="text" className='search_text' placeholder='Search...'/>
//                     <span className="line"></span>
                    
//                 </div>
//             </div>
         
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Header


// import React, {Component} from 'react'
// import './Header.css'
// import { TiWeatherPartlySunny } from 'react-icons/ti';

// import PropTypes from "prop-types";
// export default class header extends Component {
 
//     static defaultProps = {
//         lat:0,
//         lng:0,
//         temp:0
//       };
//       static propTypes = {
//         lat: PropTypes.number,
//         lng: PropTypes.number,
//         temp:PropTypes.number
//       };
//       async componentDidMount() {
//         const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.props.lat},${this.props.lng}?unitGroup=us&key=23FF36AZPE75SCTYHUPXH5U6U`;
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         // this.setState({
//         // temp:parsedData.currentConditions.temp,
//     });
//       }
//       render() {
//   return (
//     <div className='container Header_container'>
//         <div className='header_position'>
   
//             <h3>Travel Helper</h3>
//             {/* <h4>temp:{(this.state.temp)}</h4> */}
        
//         <div className='container search_bar'>
            
//             <TiWeatherPartlySunny/>
           
//                     {/* <h3>{this.temp}</h3> */}
            
         
//         </div>
//         </div>
//     </div>
//   )
// }
// }
