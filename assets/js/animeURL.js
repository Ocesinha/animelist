class AnimePage {
    constructor() {
        this.a = document.querySelectorAll('.anime-ref')
    }

Crialink(){

        this.a.forEach(function(item){
            item.addEventListener('click', e => {
                e.preventDefault()
                const animename = item.querySelector('h3').textContent.split(' ').join('+')
            
                let link = document.createElement('a')
                link.href = `animepage.html?name=${animename}`
                link.click()
            })
        }
    )
    }


}

const animePage = new AnimePage();
animePage.Crialink()
