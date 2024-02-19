fetch("https://oqxpqyntqutkvwkzxvju.supabase.co/rest/v1/vild_mad?season=eq." + season, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeHBxeW50cXV0a3Z3a3p4dmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjkzNTAsImV4cCI6MjAyMzQwNTM1MH0.vKE6NAOQc3KfnX6D2uEpMzA7YrKmdbvnbv7deknPEPs",
  },
})
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fanger template
  const template = document.querySelector("template").content;

  //cloner
  const clone = template.cloneNode(true);

  //Ændre indhold
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?season=${cat.season}`;

  //appender
  document.querySelector(".letterGroup ol").appendChild(clone);
}
