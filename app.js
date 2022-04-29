let kittens = [];
let submittedKitten = {}
console.log(kittens.length);

loadKittens()
// drawKittens()

/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  event.preventDefault()

  let form =event.target 
 
  let nameSubmit = (form.KittenName.value) 
  
  let repeatedNameCheck = kittens.find(kitty => kitty.name == nameSubmit)

  if(!repeatedNameCheck) {
    submittedKitten = {name: nameSubmit , mood: "indifferent" , affection: 5 , kittenID: generateId() }
    kittens.push(submittedKitten)
    console.log(kittens);
    saveKittens()
  }

  
  drawKittens()
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
 */
function saveKittens() {
  window.localStorage.setItem("kitten", JSON.stringify(kittens))
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
  
  let kittenData = JSON.parse(window.localStorage.getItem("kitten"))
  console.log(kittenData);

  if(kittenData != null)
  kittens = kittenData
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
  console.log("test");
  let kittenCardDraft = ``
  for (let i = 0; i < kittens.length; i++) {
   console.log("testing for loop");
    let kitten = kittens[i] 
    kittenCardDraft += `
    <div class="kitten1 card">
          <div>
            KITTEN NAME: ${kitten.name}
          </div>
          <div>
            <img src="moody-logo.png" alt="Moody Kittens">
          </div>
          <div>
            MOOD: ${kitten.mood}
          </div>
          <div>
            AFFECTION: ${kitten.affection}
          </div>
          <div>
            <button>PET</button>
            <button>CATNIP</button>
          </div>

        </div>
    `
    
  }
  document.getElementById(`kittens`).innerHTML =kittenCardDraft
}


/**
 * Find the kitten in the array by its id
 * @param {string} id 
 * @return {Kitten}
 */
function findKittenById(id) {
  let Kitten =kittens.find(k => k.kittenID == id)
}


/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5 
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} id 
 */
function pet(id) {
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} id
 */
function catnip(id) {
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten 
 */
function setKittenMood(kitten) {
}

/**
 * Removes all of the kittens from the array
 * remember to save this change
 */
function clearKittens(){
}

/**
 * Removes the welcome content and should probably draw the 
 * list of kittens to the page. Good Luck
 */
function getStarted() {
  document.getElementById("welcome").remove();
  console.log('Good Luck, Take it away')
}


// --------------------------------------------- No Changes below this line are needed

/**
/  * Defines the Properties of a Kitten
/  * @typedef {{name: string, mood: string, affection: number}} Kitten
/  */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

loadKittens();
