function displayRecipe(response){
   console.log("recipe generated");
new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

function generateRecipe(event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "588o0f43ac2e1ab815ce138f9afctf73";
let prompt =`Generate a recipe about ${instructionsInput.value}`;
let context = "You are an expert about recipes. Your mission is to generate recipes in basic HTML.Please give short cooking instruction with the ingredients about the recipe";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log(`Prompt: ${prompt}`);
console.log(`Context; ${context}`);
console.log("Generating recipe");
axios.get(apiURL).then(displayRecipe);
}
    
  
  let recipeFormElement = document.querySelector("#recipe-generator-form");
  recipeFormElement.addEventListener("submit", generateRecipe);