const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const characters = ["Zack Weaver", "Darth Vader", "Jeff Bezos"];
const places = ["the White House", "a concert", "your moms house"];
const events = [
  "pooped his pants",
  "revealed himself as Anthony Pinter",
  "transformed into a middle age divorced dad with a drinking problem",
];

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = `It was a nice Autumn day, approximately 20 degrees Celsius, so ${randomCharacter} decided to go for a drink. When he got to ${randomPlace}, he started to feel a bit funny, then ${randomEvent}. Cleveland Brown was there too and started twerking with joy with his butt becoming 10 more pounds with each bounce — ${randomCharacter} was not amused, and it was a succesful night out.`;

  return storyText;
}

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Cleveland Brown", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("10 more pounds", weight);
    newStory = newStory.replace("20 degrees Celsius", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}