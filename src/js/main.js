"use strict";


console.log(`Hello world!`);

const list = document.querySelector('.projects__list');

fetch('https://api.github.com/users/wroblewski-kamil/repos?sort=update&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const {html_url, name, description, homepage} = repo;
      list.innerHTML += `
      <li class="projects__list--item">
      <img class="projects__list--img" src="assets/img/github icon.svg">
      <h4 class="projects__list--link">${name}</h4>
      <p class="projects__list--description">${description ? description : "brak opisu"}</p>
      <div class="projects__links">
      <a class="projects__links--demo" href="${homepage}"><img src="assets/img/Demo Icon.svg">Demo</a>
      <a class="projects__links--github" href="${html_url}"><img src="assets/img/Code Icon.svg">Github</a>
      <div>
      </li>
      `;}
  })

  .catch(err => {
    console.log(err);
  });
