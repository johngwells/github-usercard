/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

const followersArray = [ 'johngwells', 'arizephyr123', 'Wais-A', 'gsc229'];

followersArray.forEach(user => {
  axios
  .get(`https://api.github.com/users/${user}`)
  .then(response => {
    console.log(response);
    userArray = response.data;
    // Object.keys(response.data).forEach(item => {
    // console.log(item);
    cards.appendChild(gitCard(userArray));
    // })
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
})


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
function gitCard(data) {
  const gitCards = document.createElement('div'),
  gitImage = document.createElement('img'),
  cardInfo = document.createElement('div'),
  gitName = document.createElement('h3'),
  gitUsername = document.createElement('p'),
  location = document.createElement('p'),
  profile = document.createElement('p'),
  profileLink = document.createElement('a'),
  followers = document.createElement('p'),
  following = document.createElement('p'),
  bio = document.createElement('p');

  // Set Classes
  gitCards.classList.add('card');
  cardInfo.classList.add('card-info');
  gitName.classList.add('name');
  gitUsername.classList.add('username');

  gitImage.src = data.avatar_url;
  gitName.textContent = data.name;
  gitUsername.textContent = data.login;
  location.textContent = `location: ${data.location}`
  profile.textContent = `Profile: ${data.html_url}`;
  profileLink.href = `${data.html_url}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = data.bio;

  // Append
  gitCards.appendChild(gitImage);
  gitCards.appendChild(cardInfo);
  cardInfo.appendChild(gitName);
  cardInfo.appendChild(gitUsername);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // API

  return gitCards;
}

// New Component & appendChild to DOM


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [ 'cjgodfather', 'emilyelri', 'kmcknight1', 'BaoPham92', 'alecblkly' ];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
