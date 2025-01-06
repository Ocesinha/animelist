class AnimeInfo{
constructor(){
this.urlParams = new URLSearchParams(window.location.search);
this.animeName = this.urlParams.get('name'); 
}

async info(){
const APIrequest = await apiRequestbyName(this.animeName);
const cape = (APIrequest['data'][0]['images']['jpg']['large_image_url'])
const title = (APIrequest['data'][0]['title'])
const episodes = (APIrequest['data'][0]['episodes'])
const synopsis = (APIrequest['data'][0]['synopsis'])
const rank = (APIrequest['data'][0]['rank'])
const score = (APIrequest['data'][0]['score'])
const genrer = (APIrequest['data'][0]['genres'][0]['name'])
const rating = (APIrequest['data'][0]['rating'])
const status = (APIrequest['data'][0]['status'])
const year = (APIrequest['data'][0]['year'])


this.criaelementos(cape,title,episodes,synopsis,rank,score,genrer,rating,status,year)

}

criaelementos(cape,title,episodes,synopsis,rank,score,genrer,rating,status,year){
const _cape = document.querySelector('.anime-image img')
const h2 = document.querySelector('.popular-card h2')
const p = document.querySelector('.popular-card p')
const _episodes = document.querySelector('.ep')
const _rank = document.querySelector('.rank')
const _status = document.querySelector('.status')
const _score = document.querySelector('.score')
const _genrer = document.querySelector('.genrer')
const _rating = document.querySelector('.rating')
const _year = document.querySelector('.year')


_cape.src = cape;
_cape.alt = title;
_cape.title = title;
h2.innerHTML = title;
p.innerHTML = synopsis;
_episodes.innerHTML = `Episodes: ${episodes}`;
_rank.innerHTML = `Rank: ${rank}`;
_score.innerHTML = `Score: ${score}`;
_status.innerHTML = `Status: ${status}`;
_genrer.innerHTML = `Genrer: ${genrer}`
_rating.innerHTML = `Rating: ${rating}`;
_year.innerHTML = `Year: ${year}`;

}

}

const infonime = new AnimeInfo()
infonime.info()