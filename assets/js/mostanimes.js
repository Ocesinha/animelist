class AnimeList{
constructor(){
    this.season = document.querySelector('.season')
    this.popular = document.querySelector('.popular')
}

async spawnAnimeListSeason(){

    const API = await apiRequestSeason()
    let cape = (API['data'][0]['images']['jpg']['large_image_url'])
    let title = (API['data'][0]['title'])
    let sinopse = (API['data'][0]['synopsis'])

for(let i = 0; i<(API['data'].length); i++){

    cape = (API['data'][i]['images']['jpg']['large_image_url'])
    title = (API['data'][i]['title'])
    sinopse = (API['data'][i]['synopsis'])


    this.div = document.createElement('div')
    this.div.classList.add('anime-card')

    this.a = document.createElement('a')
    this.a.classList.add('anime-ref')


    this.img = document.createElement('img')
    this.h3 = document.createElement('h3')
    this.p = document.createElement('p')


    this.season.appendChild(this.div)
    this.div.appendChild(this.a)
    this.a.appendChild(this.img)
    this.a.appendChild(this.h3)
    this.a.appendChild(this.p)


    this.img.src = cape
    this.h3.innerHTML = title;
    this.p.innerHTML = sinopse;

    this.a.href = `animepage.html?name=${this.h3.textContent.split(' ').join('+')}`
}


}

async spawnAnimeListPopular(){

const api = await apiRequestPopular();

let cape = (api['data'][0]['entry'][0]['images']['jpg']['large_image_url'])
let title = (api['data'][0]['entry'][0]['title'])



for(let i = 0; i < 30; i++){
    for(let u = 0; u < 2; u++){
        cape = (api['data'][i]['entry'][u]['images']['jpg']['large_image_url'])
    title = (api['data'][i]['entry'][u]['title'])
    }
    this.div = document.createElement('div')
    this.div.classList.add('anime-card')

    this.a = document.createElement('a')
    this.a.classList.add('anime-ref')

    this.img = document.createElement('img')
    this.h3 = document.createElement('h3')
    this.p = document.createElement('p')

    this.popular.appendChild(this.div)
    this.div.appendChild(this.a)
    this.a.appendChild(this.img)
    this.a.appendChild(this.h3)
    this.a.appendChild(this.p)


    this.img.src = cape
    this.h3.innerHTML = title;

    this.a.href = `animepage.html?name=${this.h3.textContent}`

}


}

}



const teste = new AnimeList
teste.spawnAnimeListSeason()
teste.spawnAnimeListPopular()
