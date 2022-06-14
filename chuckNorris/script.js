document.querySelector(".btn").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  //récupérer les données en HTTP

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
  // true = asynchrone, permet de ne pas charger la page

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      // je donne une valeur à cette variable qui est en loccurence la réponse du serveur que je convertie en JSON.
      let output = "";

      if (response.type === "success") {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Error</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
