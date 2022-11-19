class MobileNavbar{
  constructor(mobileMenu, navList, navLinks){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks(){
    this.navLinks.forEach((link, index) =>{
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if(this.mobileMenu){
      this.addClickEvent();
    }
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();

const gitApiProfileUrl = "https://api.github.com/users/cleversonasj";

fetch(gitApiProfileUrl).then(response => response.json()).then((data) => {
  const profileName = document.getElementById('name');
  const imgProfile = document.querySelector('.second-box');
  profileName.textContent = data.name;
  imgProfile.innerHTML += 
  `<img src="${data.avatar_url}" alt="Foto do ${data.name}" title="Foto do ${data.name}">`
});

const gitApiReposUrl = "https://api.github.com/users/cleversonasj/repos"

fetch(gitApiReposUrl).then(response => response.json()).then((repos) => {
  const projectsBox = document.getElementById('repositories');
  for (repo of repos){
    if(repo.homepage){
      projectsBox.innerHTML += 
    `<div class="ReposData">
      <h3>${repo.name}</h3>
      <p>${repo.description}</p>
      <div class="links">
        <span class="page"><a href="${repo.homepage}" target="_blank">Acessar a Página</a></span>
        <span class="gitRepository"><a href="${repo.html_url}" target="_blank">Acessar o Repositório</a></span>
      </div>
    </div>`
    }else{
      projectsBox.innerHTML += 
    `<div class="ReposData">
      <h3>${repo.name}</h3>
      <p>${repo.description}</p>
      <span class="gitRepository"><a href="${repo.html_url}" target="_blank">Acessar o Repositório</a></span>
    </div>`
    }
  }
})

