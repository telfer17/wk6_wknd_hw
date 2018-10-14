const addPlayer = function(name, club, position, rating) {
  // create wrapper div
  const wrapper = document.createElement('div');
  // create elements for name, club, position
  const nameElement = document.createElement('h3');
  nameElement.textContent = name;
  const clubElement = document.createElement('p');
  clubElement.textContent = club;
  const positionElement = document.createElement('p');
  positionElement.textContent = position;
  const ratingElement = document.createElement('p');
  ratingElement.textContent = rating;
  // append each element to the wrapper
  wrapper.appendChild(nameElement);
  wrapper.appendChild(clubElement);
  wrapper.appendChild(positionElement);
  wrapper.appendChild(ratingElement);
  // append the wrapper div to the reading list
  const playerList = document.querySelector('#players');
  playerList.appendChild(wrapper);
};

const handleFormSubmit = function(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const club = event.target.club.value;
  const position = event.target.position.value;
  const rating = event.target.rating.value;

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
})
