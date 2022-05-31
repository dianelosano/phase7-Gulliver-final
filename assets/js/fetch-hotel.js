const sectionCheckin__btnSearch = document.getElementById(
  "sectionCheckin__btnSearch"
);
sectionCheckin__btnSearch.addEventListener("click", fetchHotels);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    "X-RapidAPI-Key": "ac516a8883mshae8d46ff375dd6ap17a3ecjsn0c1652ba5d79",
  },
};

function fetchHotels() {
  fetch('https://booking-com.p.rapidapi.com/v1/hotels/nearby-cities?latitude=-23.533773&longitude=-46.62529&locale=pt-br', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}