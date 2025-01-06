class Search{
    constructor(){
        this.form = document.querySelector('.search-form')
        this.search = document.querySelector('.search input')
    }

    pesquisa(){
        this.form.addEventListener('submit', e =>{
            e.preventDefault()
            const valor = this.search.value;
            this.search.value = '';
            this.createpage(valor)
        })
    }

    createpage(nome){
        const a = document.createElement('a')
        a.href = `animesearch.html?name=${nome}`
        a.click()
    }
}


const a = new Search()
a.pesquisa()


function messageWelcome(){
    const time = document.querySelector('.welcome p')
    const data = new Date;
    let tempo = data.getHours();
    if(tempo >= 5 && tempo <= 12){
        time.innerHTML = "Good Morning!"
    }else if(tempo > 12 && tempo <= 17){
        time.innerHTML = "Good Afternoon!"
    }else if(tempo > 17){
        time.innerHTML = "Good Night!"
    }else if(tempo >= 0 && tempo < 5){
        time.innerHTML = "Good Night!"
    }
}


messageWelcome()