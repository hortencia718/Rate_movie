console.log("hi you its me!")
// create the html for goonies

const gooniesLi =document.createElement('li')
// goonies.className = "movie"
gooniesLi.classList.add('movie')

gooniesLi.innerHTML =`
<h3>Goonies</h3>
<img src="https://i.etsystatic.com/16821137/r/il/0dfc63/1908262247/il_570xN.1908262247_2w2m.jpg",
<h4>Year: 1985</h4>
<h4>Genre: adventure</h4>
<h4>Score: <span>0</span> </h4>
<button class="up-vote>Up vote</button>
<button>&times;</button>
`

// gooniesLi.innerHTML = `
// <h3>${movieObj.title}</h3>
// <img src="${movieObj.imageUrl}"/>
// <h4> year: ${movieObj.year}</h4>
// <h4> genre: ${movieObj.genre}</h4>
// <h4> score: <span> ${movieObj.score} </span> </h4>
// <button class="up-vote"> up vote</button>
// <button>Down Vote</button>
// <button>&times;</button>
// `
console.log(gooniesLi)

// const gooniesObj ={
//     title: "the Goonies",
//     imageUrl: "https://i.etsystatic.com/16821137/r/il/0dfc63/1908262247/il_570xN.1908262247_2w2m.jpg",
//     year: 1985,
//     genre: "adventure",
//     score: 0
// }

// function renderMovie(movieObj){
//     const movieLi = document.createElement('li')

    // movieLi.className ="movie" create movie li/ul
   

//    gooniesLi.innerHTML = `
//     <h3>${movieObj.title}</h3>
//     <img src="${movieObj.imageUrl}"/>
//     <h4> year: ${movieObj.year}</h4>
//     <h4> genre: ${movieObj.genre}</h4>
//     <h4> score: <span> ${movieObj.score} </span> </h4>
//     <button class="up-vote"> up vote</button>
//     <button>Down Vote</button>
//     <button>&times;</button>
//     `
    // console.log(gooniesLi)
    // const movieList = document.querySelector("#movie-list")
    // movieList.append(movieLi)



// }




// const jawsUpVote = document.querySelector('.up-vote')

// jawsUpVote.addEventListener('click', function(e){
//   const button = e.target
//   const parentLi = button.parentElement
//   const scoreSpan = parentLi.querySelector('span')
//   const currentScore = parseInt(scoreSpan.textContent)
//   const newScore = currentScore + 1

//   scoreSpan.textContent = newScore
// })


// const upVoteButtons = document.querySelectorAll('.up-vote')

// for(const button of upVoteButtons){
//   button.addEventListener('click', function(e){
//     const button = e.target
//     const parentLi = button.parentElement
//     const scoreSpan = parentLi.querySelector('span')
//     const currentScore = parseInt(scoreSpan.textContent)
//     const newScore = currentScore + 1
    
//     scoreSpan.textContent = newScore
//   })
// }

// renderMovie(gooniesObj)




// As a user, when I click the Up Vote button, the score for that movie should increment by 1

// 1. get the button from the DOM
// 2. add a click listener
// 3. do some DOM manipulation on click