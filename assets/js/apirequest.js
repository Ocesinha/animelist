
async function apiRequestSeason(){

    const api = await fetch(`https://api.jikan.moe/v4/seasons/now`)
    const apiJSON = await api.json()

    if(apiJSON){
        const div = document.querySelector('.loading')
        setTimeout(function remover(){div.remove()}, 500)
    return await apiJSON
    }
}
async function apiRequestbyID(id){
    const api = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const apiJSON = await api.json()
    if(apiJSON){
        const div = document.querySelector('.loading')
        setTimeout(function remover(){div.remove()}, 500)
    return await apiJSON
    }
}
async function apiRequestPopular(){
    const api = await fetch('https://api.jikan.moe/v4/recommendations/anime')
    const apiJSON = await api.json()

    if(apiJSON){
        const div = document.querySelector('.loading')
        setTimeout(function remover(){div.remove()}, 500)
    return await apiJSON
    }
}

async function apiRequestbyName(name){
    const api = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    const apiJSON = await api.json()
    if(apiJSON){
        const div = document.querySelector('.loading')
        setTimeout(function remover(){div.remove()}, 500)
    return await apiJSON
    }
}

