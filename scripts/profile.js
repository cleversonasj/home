const profileName = 'cleversonasj';
const gitApiProfileUrl = `https://api.github.com/users/${profileName}`;
const gitApiReposUrl = `${gitApiProfileUrl}/repos`;

const imgBox = document.querySelector('.second-box');
const profileIMG = document.createElement('img');
imgBox.appendChild(profileIMG);

fetch(gitApiProfileUrl).then(response => response.json()).then((data) => {
  profileIMG.setAttribute('src', data.avatar_url);
  profileIMG.setAttribute('alt', "Foto do " + data.name);
  profileIMG.setAttribute('title', "Foto do " + data.name);
});

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
