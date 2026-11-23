document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    document.querySelector('.city-name').textContent = city;
  }
});
