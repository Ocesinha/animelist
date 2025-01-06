class Popular{
    constructor(nome, capa, episodios, sinopse, status) {

        this.nome = nome;
        this.capa = capa;
        this.episodios = episodios;
        this.sinopse = sinopse;
        this.status = status;

}

criarElementos(){


    const info = document.querySelector('.info h3');
    const image = document.querySelector('.anime-image img')
    const reviews = document.querySelector('.reviews')
    const text = document.querySelector('.info p')
    const span = document.querySelector('.reviews span')


    image.src = this.capa
    image.title = this.nome
    image.alt = this.nome
    info.innerHTML = this.nome
    text.innerHTML = this.sinopse
    span.innerHTML = `Ep: ${this.episodios} / Status: ${this.status}`

}

random(max, min){
    max = 10;
    min = 0;
    const random = Math.floor(Math.random() * (max - min) + min)
    return random
}


async API () {
    const requestANIME = await apiRequestSeason();

    const number = this.random()
    const cape = (requestANIME['data'][number]['images']['jpg']['large_image_url'])
    const title = (requestANIME['data'][number]['title'])
    const episodes = (requestANIME['data'][number]['episodes'])
    const sinopse = (requestANIME['data'][number]['synopsis'])
    const status = (requestANIME['data'][number]['status'])
    const popy = new Popular(title,cape,episodes,sinopse, status)
    popy.criarElementos()
}

}

class NewAnime{
    constructor(nome, capa, sinopse, nome2, capa2, sinopse2){
        this.nome = nome,
        this.capa = capa,
        this.sinopse = sinopse;
        this.nome2 = nome2,
        this.capa2 = capa2,
        this.sinopse2 = sinopse2;


    }

    criarElementos(){


        const animecard = document.querySelector('.anime-card-one')
        const animecardtwo = document.querySelector('.anime-card-two')
        const img = animecard.querySelector('img')
        const h3 = animecard.querySelector('h3')
        const p = animecard.querySelector('p')
        const imgtwo = animecardtwo.querySelector('img')
        const h3two = animecardtwo.querySelector('h3')
        const ptwo = animecardtwo.querySelector('p')

        img.src = this.capa
        imgtwo.src = this.capa2
        h3.innerHTML = this.nome
        p.innerHTML = this.sinopse
        h3two.innerHTML = this.nome2
        ptwo.innerHTML = this.sinopse2
    }

    async API () {

        const requestANIME = await apiRequestSeason();
        const cape = (requestANIME['data'][0]['images']['jpg']['large_image_url'])
        const title = (requestANIME['data'][0]['title'])
        const sinopse = (requestANIME['data'][0]['synopsis'])

        const cape2 = (requestANIME['data'][1]['images']['jpg']['large_image_url'])
        const title2 = (requestANIME['data'][1]['title'])
        const sinopse2 = (requestANIME['data'][1]['synopsis'])

        const anime = new NewAnime(title,cape,sinopse,title2,cape2,sinopse2)
        anime.criarElementos()
    }

}


const Atual = new Popular()
Atual.API()

const novosAnimes = new NewAnime()
novosAnimes.API()




