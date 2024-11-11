document.getElementById("searchButton").addEventListener("click", function(){
    fetch("superheroes.php")
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error(' Issue retrieving the data:', error);
    });
});