document.getElementById("searchButton").addEventListener("click", function(){
    //Get and sanitize user input
    let query = document.getElementById("searchField").value.trim();
    let encodedQuery = encodeURIComponent(query);

    fetch("superheroes.php?query=" + encodedQuery)
    .then(response => response.text())
    .then(data => {

        document.getElementById("result").innerHTML = data.trim() || "<p>No results found</p>";
    })
    .catch(error => {
        console.error("Issue retrieving the data:", error);
    });
});