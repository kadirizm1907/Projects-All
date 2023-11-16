

fetch("https://api.github.com/users")
.then((res) => {
  // console.log(res)
  if (!res.ok) {
    //? Feetch api'da hatayi bizim yakalamiz gerekiyor.
    throw new Error(`Hata: ${res.status}`) //? bir hata firlatiyoruz
  }
  return res.json()
})
.then((data) => {
  // veri = data
  // console.log(veri)
  show(data)
})
// .catch((err) => document.write(err))


const btn = document.getElementById('btn')
const userSection = document.getElementById("users")
    function randomUser() {
    userSection.innerHTML = Math.floor(Math.random()* show.length)
     
    }
    btn.addEventListener("click", () => {
      userSection.innerHTML = Math.floor(Math.random()* show.length)

    })
console.log(users)
const show = (users) => {
 const userSection = document.getElementById("users")  
 userSection.innerHTML = Math.floor(Math.random()* show.length)
    users.forEach((user) => {
      userSection.innerHTML += `
          <h1 class="usr" >${user.login}</h1>
          <img class="usr" src="${user.avatar_url}" width="200px" alt="" />
          <p class="usr"><a  href="${user.html_url}" target="_blank">URL</a></p> 
      `
    })
  }
 