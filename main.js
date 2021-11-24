document.querySelector('#generate').addEventListener('click', event => {
	
	fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => data.json())
    .then((response) => {
		
		console.log(response);
		document.querySelector("#imgsrc").src=response.message;

    })
    .catch((error) => console.log(error));
})

document.querySelector('#submit').addEventListener('click', event => {
	var city=document.querySelector("#city").value;
    var url="https://goweather.herokuapp.com/weather/"+city;
	fetch(url)
    .then((data) => data.json())
    .then((response) => {
		
		console.log(response);
		
		document.querySelector("#temperature").innerHTML=response.temperature;
		document.querySelector("#wind").innerHTML=response.wind;
        document.querySelector("#description").innerHTML=response.description;
        document.querySelector("#forecast").innerHTML=response.forecast;
    })
    .catch((error) => console.log(error));
})