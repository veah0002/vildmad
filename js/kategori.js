const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("season");

fetch(`https://oqxpqyntqutkvwkzxvju.supabase.co/rest/v1/vild_mad?season=cs.["${query}"]`, {
  //   method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeHBxeW50cXV0a3Z3a3p4dmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjkzNTAsImV4cCI6MjAyMzQwNTM1MH0.vKE6NAOQc3KfnX6D2uEpMzA7YrKmdbvnbv7deknPEPs",
  },
})
  .then((res) => res.json())
  .then(showCategories);
