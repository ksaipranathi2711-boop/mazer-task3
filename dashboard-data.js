fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("totalUsers").innerText = data.totalUsers;
    document.getElementById("activeUsers").innerText = data.activeUsers;
    document.getElementById("newSignups").innerText = data.newSignups;
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });
