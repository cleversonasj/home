//Menu Mobile
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



const aboutBox = document.querySelector('#about');
const aboutMe = document.querySelector('.first-box');
const myGitHubName = document.createElement('h1');
const occupation = document.querySelector('.first-box > h4')
const imgProfile = document.querySelector('.second-box');
const profileIMG = document.createElement('img');
aboutMe.insertBefore(myGitHubName, occupation);
imgProfile.appendChild(profileIMG);

const gitApiProfileUrl = "https://api.github.com/users/cleversonasj";

fetch(gitApiProfileUrl).then(response => response.json()).then((data) => {
  myGitHubName.textContent = data.name;
  profileIMG.setAttribute('src', data.avatar_url);
  profileIMG.setAttribute('alt', "Foto do " + data.name);
  profileIMG.setAttribute('title', "Foto do " + data.name);
});

const gitApiReposUrl = "https://api.github.com/users/cleversonasj/repos"

fetch(gitApiReposUrl).then(response => response.json()).then((repos) => {

  const projectsBox = document.getElementById('repositories'); 

  for (repo of repos){
    const reposData = document.createElement('div');
    reposData.classList.add('ReposData');
    const reposDataName = document.createElement('h3');
    const reposDataDescription = document.createElement('p');
    const reposDataLinks = document.createElement('div');
    reposDataLinks.classList.add('links');
    const reposDataGitRepository = document.createElement('a');
    const reposDataGitRepositorySpan = document.createElement('span');
    reposDataGitRepositorySpan.textContent = 'Acessar Repositório';
    reposDataGitRepository.classList.add('gitRepository');
    reposDataName.textContent = repo.name;
    reposDataDescription.textContent = repo.description;
    reposDataGitRepository.setAttribute('href', repo.html_url);
    reposDataGitRepository.setAttribute('target', '_blank');
    reposDataGitRepository.appendChild(reposDataGitRepositorySpan);
    reposDataLinks.appendChild(reposDataGitRepository);
    reposData.appendChild(reposDataName);
    reposData.appendChild(reposDataDescription);
    reposData.appendChild(reposDataLinks);
    projectsBox.appendChild(reposData);
    if(repo.homepage){
      const reposDataPage = document.createElement('a');
      reposDataPage.classList.add('page');
      reposDataPage.setAttribute('href', repo.homepage);
      reposDataPage.setAttribute('target', '_blank');
      const reposDataPageSpan = document.createElement('span');
      reposDataPageSpan.textContent = 'Acessar Página';
      reposDataPage.appendChild(reposDataPageSpan);
      reposDataLinks.appendChild(reposDataPage);
    }
  }
})

window.addEventListener('scroll', function() {
  var div = document.querySelector('.hidden_1');
  var position = div.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    div.style.opacity = 1;
    div.style.transform = 'translateX(0)';
  }
});

window.addEventListener('scroll', function() {
  var div = document.querySelector('.hidden_2');
  var position = div.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    div.style.opacity = 1;
    div.style.transform = 'translateX(0)';
  }
});

window.addEventListener('scroll', function() {
  var div = document.querySelector('.hidden_3');
  var position = div.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    div.style.opacity = 1;
    div.style.transform = 'translateX(0)';
  }
});

