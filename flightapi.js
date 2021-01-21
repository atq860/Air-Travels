

showCharacters = (characters) => {
     const charactersDiv = document.querySelector("#rick-and-morty-characters");
     characters.forEach(character => {
       const characterElement = document.createElement("p");
       characterElement.innerText = 'Character Name: ${character.results.name}';
       charactersDiv.append(characterElement);
       console.log(characterElement);
     });
   }

   fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(characters => showCharacters(characters.results));
