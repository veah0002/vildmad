const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://oqxpqyntqutkvwkzxvju.supabase.co/rest/v1/vild_mad?id=" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

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
