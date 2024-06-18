export async function getWeatherCode(code){
    switch(code){
        case 0:
            return {
                name: "Clear Sky",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="5" stroke="yellow" fill="yellow" stroke-width="2"/>
</svg>`,
            };
        case 1:
            return {
                name: "Mainly Clear",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="grey" fill="grey" stroke-width="2"/>
  <circle cx="16" cy="16" r="6" stroke="yellow" fill="yellow" stroke-width="2"/>
</svg>`,
            };
        case 2:
            return {
                name: "Partly Cloudy",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
</svg>`,
            };
        case 3: 
            return {
                name: "Overcast",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
</svg>`,
            };
        case 45:
            return {
                name: "Fog",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 12H21" stroke="grey" stroke-width="2"/>
  <path d="M5 16H19" stroke="grey" stroke-width="2"/>
  <path d="M7 20H17" stroke="grey" stroke-width="2"/>
</svg>`,
            };
        case 48:
            return {
                name: "Depositing Rime Fog",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 12H21" stroke="grey" stroke-width="2"/>
  <path d="M5 16H19" stroke="grey" stroke-width="2"/>
  <path d="M7 20H17" stroke="grey" stroke-width="2"/>
  <path d="M12 12V18" stroke="lightgrey" stroke-width="1"/>
</svg>`,
            };
        case 51:
            return{
                name: "Drizzle Light",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="lightblue" stroke-width="1"/>
</svg>`,
            };
        case 53:
            return {
                name: "Drizzle Moderate",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="lightblue" stroke-width="1"/>
  <path d="M12 18V21" stroke="lightblue" stroke-width="1"/>
</svg>`,
            };
        case 55:
            return {
                name: "Drizzle Dense",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="lightblue" stroke-width="1"/>
  <path d="M12 18V21" stroke="lightblue" stroke-width="1"/>
  <path d="M16 18V21" stroke="lightblue" stroke-width="1"/>
</svg>`,
            };
        case 56:
            return {
                name: "Freezing Drizzle: Light",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="#739BD0" stroke-width="1"/>
  <path d="M10 18V21" stroke="lightblue" stroke-width="1"/>
  <path d="M12 18V21" stroke="#739BD0" stroke-width="1"/>
</svg>`,
            };
        case 57:
            return {
                name:  "Freezing Drizzle: Dense",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="lightblue" stroke-width="1"/>
  <path d="M10 18V21" stroke="#739BD0" stroke-width="1"/>
  <path d="M12 18V21" stroke="lightblue" stroke-width="1"/>
  <path d="M14 18V21" stroke="#739BD0" stroke-width="1"/>
</svg>`,
            };
        case 61:
            return {
                name:  "Rain: Slight",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="blue" stroke-width="1"/>
  <path d="M10 18V21" stroke="blue" stroke-width="1"/>
</svg>`,
            };
        case 63:
            return {
                name:  "Rain: Moderate",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="blue" stroke-width="1"/>
  <path d="M10 18V21" stroke="blue" stroke-width="1"/>
  <path d="M12 18V21" stroke="blue" stroke-width="1"/>
</svg>`,
            };
        case 65:
            return {
                name:  "Rain: Heavy",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="blue" stroke-width="1"/>
  <path d="M10 18V21" stroke="blue" stroke-width="1"/>
  <path d="M12 18V21" stroke="blue" stroke-width="1"/>
  <path d="M14 18V21" stroke="blue" stroke-width="1"/>
</svg>`,
            };
        case 66:
            return {
                name:  "Freezing Rain: Light",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="#739BD0" stroke-width="1"/>
  <path d="M10 18V21" stroke="blue" stroke-width="1"/>
  <path d="M12 18V21" stroke="#739BD0" stroke-width="1"/>
  <path d="M14 18V21" stroke="blue" stroke-width="1"/>
</svg>`,
            };
        case 67:
            return {
                name:  "Freezing Rain: Heavy",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="#739BD0" stroke-width="1"/>
  <path d="M10 18V21" stroke="blue" stroke-width="1"/>
  <path d="M12 18V21" stroke="#739BD0" stroke-width="1"/>
  <path d="M14 18V21" stroke="blue" stroke-width="1"/>
  <path d="M16 18V21" stroke="#739BD0" stroke-width="1"/>
</svg>`,
            };
        case 71:
            return {
                name:  "Snow fall: Slight",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="white" stroke-width="1"/>
</svg>`,
            };
        case 73:
            return {
                name:  "Snow fall: Moderate",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="white" stroke-width="1"/>
  <path d="M10 18V21" stroke="white" stroke-width="1"/>
</svg>`,
            };
        case 75:
            return {
                name:  "Snow fall: Heavy",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="white" stroke-width="1"/>
  <path d="M10 18V21" stroke="white" stroke-width="1"/>
  <path d="M12 18V21" stroke="white" stroke-width="1"/>
</svg>`,
            };
        case 77:
            return {
                name:  "Snow Grains",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="white" stroke-width="2"/>
  <path d="M10 18V21" stroke="white" stroke-width="2"/>
  <path d="M12 18V21" stroke="white" stroke-width="2"/>
  <path d="M14 18V21" stroke="white" stroke-width="2"/>
</svg>`,
            };
        case 80:
            return {
                name:  "Rain Showers: Slight",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="black" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 18V21" stroke="black" stroke-width="2"/>
</svg>`,
            };
        case 81:
            return {
                name:  "Rain Showers: Moderate",
                svg: `
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="black" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 18V21" stroke="black" stroke-width="2"/>
  <path d="M16 18V21" stroke="black" stroke-width="2"/>
</svg>`,
            };
        case 82:
            return {
                name:  "Rain Showers: Violent",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="black" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 18V21" stroke="black" stroke-width="2"/>
  <path d="M16 18V21" stroke="black" stroke-width="2"/>
  <path d="M18 18V21" stroke="black" stroke-width="2"/>
</svg>`,
            };
        case 85:
            return {
                name:  "Snow Showers: slight",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="black" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
</svg>`,
            };
        case 86:
            return {
                name:  "Snow Showers: heavy",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="black" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 18V21" stroke="black" stroke-width="2"/>
  <path d="M16 18V21" stroke="black" stroke-width="2"/>
</svg>`,
            };
        case 95:
            return {
                name:  "Thunderstorm: Slight",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16H8M14 16V21M14 16V18M14 21V18" stroke="black" stroke-width="2"/>
</svg>`,
            };
        case 96:
            return {
                name:  "Thunderstorm with slight hail",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="black" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16H8M14 16V21M14 16V18M14 21V18" stroke="black" stroke-width="2"/>
</svg>`,
            };
        case 99:
            return {
                name:  "Thunderstorm with slight and/or heavy hail",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="4" stroke="yellow" fill="yellow" stroke-width="2"/>
  <path d="M5 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16Z" stroke="grey" fill="grey" stroke-width="2"/>
  <path d="M8 18V21" stroke="black" stroke-width="2"/>
  <path d="M10 18V21" stroke="black" stroke-width="2"/>
  <path d="M12 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 18V21" stroke="black" stroke-width="2"/>
  <path d="M14 16H19C20.1046 16 21 15.1046 21 14V12C21 10.8954 20.1046 10 19 10H17C17 8.34315 15.6569 7 14 7C12.3431 7 11 8.34315 11 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16H8M14 16V21M14 16V18M14 21V18" stroke="black" stroke-width="2"/>
</svg>`,
            };
        default:
            return	{
                name: "Clear Sky",
                svg: `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="5" stroke="black" stroke-width="2"/>
</svg>`,
            };
    }
}