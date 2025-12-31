// Fetch data from JSON file
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('totalUsers').textContent = data.users;
    document.getElementById('activeUsers').textContent = data.activeUsers;
    document.getElementById('newSignups').textContent = data.newSignups;
  })
  .catch(error => console.error('Error fetching data:', error));
