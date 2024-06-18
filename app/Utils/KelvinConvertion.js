export function convertFahrenheitToKelvin(fahrenheit){
    // (32°F − 32) × 5/9 + 273.15 = 273.15K
    return (fahrenheit - 32) * 5/9 + 273.15;
}

export function convertCelsiusToKelvin(celsius){
    // 0°C + 273.15 = 273.15K
    return celsius + 273.15;
}


