

class AnimeSearch{
    constructor(){
    this.urlParams = new URLSearchParams(window.location.search);
    this.animeName = this.urlParams.get('name'); 

    this.season = document.querySelector('.season')
    this.popular = document.querySelector('.popular')
    this.h2 = document.querySelector('.list')
    }

    async spawnAnimeSearch(){

        const API = await apiRequestbyName(this.animeName)
        let cape = (API['data'][0]['images']['jpg']['large_image_url'])
        let title = (API['data'][0]['title'])
        let sinopse = (API['data'][0]['synopsis'])

        this.h2.innerHTML = `Showing ${API['data'].length} results for your search "${this.animeName}"`
    
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
}



const anime = new AnimeSearch()
anime.spawnAnimeSearch()