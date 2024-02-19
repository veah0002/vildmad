const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log("Her kommer id", id);

fetch("https://oqxpqyntqutkvwkzxvju.supabase.co/rest/v1/vild_mad?id=eq." + id, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeHBxeW50cXV0a3Z3a3p4dmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjkzNTAsImV4cCI6MjAyMzQwNTM1MH0.vKE6NAOQc3KfnX6D2uEpMzA7YrKmdbvnbv7deknPEPs",
  },
})
  .then((response) => response.json())
  .then((data) => showItem(data));

function showItem(item) {
  console.log("min item er ", item);

  document.querySelector(".produkt-navn").textContent = item[0].name;
  //   document.querySelector(".id1").textContent = item[0].id;
  document.querySelector(".season1").textContent = item[0].season;
  document.querySelector(".harvesting").textContent = item[0].foraging;
  document.querySelector(".location1").textContent = item[0].location;
  document.querySelector(".season").textContent = item[0].month;
  document.querySelector(".beskrivelse").textContent = item[0].description;

  document.querySelector("img").src = item[0].image;
}
