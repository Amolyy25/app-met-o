

function callapi(ville) {
  document.getElementById("btn-meteo").innerHTML = "Chargement...";
  ville = document.getElementById("ville").value;
  const apikey = "54562d5cffdf4aa58cd135407252110";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${ville}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Une erreur est survenu");
      return response.json();   
    })
    .then((result) => {
        document.getElementById("resultat").innerHTML = `
        <h2>${result.location.name}, ${result.location.country}</h2>
        <p>Température : ${result.current.temp_c}°C</p>
        <p>Météo : ${result.current.condition.text}</p>
        <p>Humidité : ${result.current.humidity}%</p>
        <p>Vent : ${result.current.wind_kph} km/h</p>
        <img src="https:${result.current.condition.icon}" alt="météo">
      `;
      document.getElementById("resultat").style.display = "block"
    })
    .catch((error) => document.getElementById("resultat").innerHTML = error)
      document.getElementById("resultat").style.display = "block"
    setTimeout(3000)
    document.getElementById("btn-meteo").innerHTML = "Voir la méteo";
}



