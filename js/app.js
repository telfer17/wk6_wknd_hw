const addPlayer = function(name, club, position, rating) {
  // create wrapper div
  const wrapper = document.createElement('div');
  // create elements for name, club, position, rating
  const nameElement = document.createElement('h3');
  nameElement.textContent = name;
  const clubElement = document.createElement('p');
  clubElement.textContent = `Club: ${club}`;
  const positionElement = document.createElement('p');
  positionElement.textContent = `Position: ${position}`;
  const ratingElement = document.createElement('p');
  ratingElement.textContent = `Rating: ${rating}`;
  // const imageElement = document.createElement('img');
  // img.src = "/filepath";
  // img.alt = "alt tag";
  // img.id = "id";

  // append each element to the wrapper
  wrapper.appendChild(nameElement);
  wrapper.appendChild(clubElement);
  wrapper.appendChild(positionElement);
  wrapper.appendChild(ratingElement);
  // wrapper.appendChild(imageElement);

  // append the wrapper div to the players list
  const playerList = document.querySelector('#players');
  playerList.appendChild(wrapper);
};

const handleFormSubmit = function(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const club = event.target.club.value;
  const position = event.target.position.value;
  const rating = event.target.rating.value;
  // const image = event.target.image.value;

addPlayer(name, club, position, rating);

const form = event.target;
form.reset();
};

const handleDeleteButtonClicked = function(event) {
  const playerList = document.querySelector('#players');
  while(playerList.firstChild) {
    playerList.removeChild(playerList.firstChild);
  };
};


document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('#new-player');
form.addEventListener('submit', handleFormSubmit);

const deleteButton = document.querySelector('#delete-all');
deleteButton.addEventListener('click', handleDeleteButtonClicked);
});
