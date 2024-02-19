//https://oqxpqyntqutkvwkzxvju.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeHBxeW50cXV0a3Z3a3p4dmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjkzNTAsImV4cCI6MjAyMzQwNTM1MH0.vKE6NAOQc3KfnX6D2uEpMzA7YrKmdbvnbv7deknPEPs

fetch("https://oqxpqyntqutkvwkzxvju.supabase.co/rest/v1/vild_mad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeHBxeW50cXV0a3Z3a3p4dmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjkzNTAsImV4cCI6MjAyMzQwNTM1MH0.vKE6NAOQc3KfnX6D2uEpMzA7YrKmdbvnbv7deknPEPs",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  //looper og kalder showData
  console.log("hvad er item ssssss: ", items);

  items.forEach(showDataSingle);
}

function showDataSingle(item) {
  console.log(item);

  //fange template
  const template = document.querySelector("#mushroomTemplate").content;

  //Lave ne kopi
  const copy = template.cloneNode(true);

  //Ændre indhold
  copy.querySelector("h3").textContent = item.name;
  copy.querySelector(".klikVidere").href = `produkt.html?id=${item.id}`;
  copy.querySelector("img").src = `./img/${item.image}`;

  //Appende
  document.querySelector(".grid").appendChild(copy);
}
