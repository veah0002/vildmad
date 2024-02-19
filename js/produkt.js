fetch("https://oqxpqyntqutkvwkzxvju.supabase.co/rest/v1/vild_mad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeHBxeW50cXV0a3Z3a3p4dmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjkzNTAsImV4cCI6MjAyMzQwNTM1MH0.vKE6NAOQc3KfnX6D2uEpMzA7YrKmdbvnbv7deknPEPs",
  },
})
  .then((response) => response.json())
  .then((data) => showItem(data));

function showItem(item) {
  console.log(item);

  document.querySelector(".produkt-navn").textContent = item.name;
  document.querySelector(".id1").textContent = item.id;
  document.querySelector(".season1").textContent = item.season;
  document.querySelector(".harvesting").textContent = item.foraging;
  document.querySelector(".location1").textContent = item.location;
  document.querySelector(".season").textContent = item.month;
  document.querySelector(".beskrivelse").textContent = item.description;

  document.querySelector("img").src = `./img/${item.image}`;
}
