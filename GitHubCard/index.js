const data = {
  "login": "ashleyalmay",
  "id": 54685244,
  "node_id": "MDQ6VXNlcjU0Njg1MjQ0",
  "avatar_url": "https://avatars2.githubusercontent.com/u/54685244?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ashleyalmay",
  "html_url": "https://github.com/ashleyalmay",
  "followers_url": "https://api.github.com/users/ashleyalmay/followers",
  "following_url": "https://api.github.com/users/ashleyalmay/following{/other_user}",
  "gists_url": "https://api.github.com/users/ashleyalmay/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ashleyalmay/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ashleyalmay/subscriptions",
  "organizations_url": "https://api.github.com/users/ashleyalmay/orgs",
  "repos_url": "https://api.github.com/users/ashleyalmay/repos",
  "events_url": "https://api.github.com/users/ashleyalmay/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ashleyalmay/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ashley",
  "company": null,
  "blog": "https://twitter.com/ashleyalmay",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 3,
  "following": 3,
  "created_at": "2019-08-29T19:07:38Z",
  "updated_at": "2020-04-09T19:21:02Z"
}




/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">.
  <img src={image url of user} />
  <div class="card-info">.
    <h3 class="name">{users name}</h3>.
    <p class="username">{users user name}</p>.
    <p>Location: {users location}</p>.
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>.
    </p>.
    <p>Followers: {users followers count}</p>.
    <p>Following: {users following count}</p>.
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function userCard(
  gitHubInfo
) {
  //  elements
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('href')
  const follower = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //  order
  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(address)
  cardInfo.appendChild(follower)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  // div call call names
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  // bring the data in
  image.src = gitHubInfo.avatar_url
  name.textContent = gitHubInfo.name
  userName.textContent = gitHubInfo.login
  location.textContent = `Location: ${gitHubInfo.location}`
  profile.textContent = `Profile: ${gitHubInfo.html_url}`
  address.textContent = gitHubInfo.html_url
  follower.textContent = `Followers: ${gitHubInfo.followers}`
  following.textContent = `Following: ${gitHubInfo.following}`
  bio.textContent = gitHubInfo.bio

  return card;
}
const cards = document.querySelector('.cards')
axios.get("https://api.github.com/users/ashleyalmay")
  .then((response) => {
    console.log(userCard(response.data));
    console.log(response)
    let gitHubInfo = response.data;
    cards.appendChild(userCard(gitHubInfo))

  })
  .catch(error => console.log(error))

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(name => {
  axios.get("https://api.github.com/users/" + name)
    .then((response) => {
      console.log(userCard(response.data));
      console.log(response)
      let gitHubInfo = response.data;
      cards.appendChild(userCard(gitHubInfo))

    })
    .catch(error => console.log(error))
})


// const cards = document.querySelector('.cards')
// axios.get("https://api.github.com/users/ashleyalmay")
//   .then(myData => cards.appendChild(userCard(myData.data))
//     .catch(error => {
//       console.log(console.error);
//     }))


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/