window.document.addEventListener("DOMContentLoaded", FecthAppi)

let btnP = document.getElementById("0")
let btnS = document.getElementById("1")
    btnP.textContent = "<<"
    btnS.textContent = ">>"
    btnP.disabled = true;
    let pagV = document.querySelector(".pagV")

    btnP.addEventListener("click", actionP);
    btnS.addEventListener("click", actionS)

    async function actionP(event) {
        let valid = 0
        if( event.target){
            let att = await event.target;
            if(parseInt(btnS.id) === 1){
                btnP.disabled = true;
                valid = 1;
            }
            else{
                let att = await event.target;
                valid = parseInt(att.id)-1
                att.setAttribute("id", valid)
                btnS.id = valid + 1
                
            }
        }
        console.log(valid)
        pagV.textContent = valid;
        FecthAppi(valid); 
    }
    
   async function actionS(event) {
        btnP.disabled = false;
        let val  = 1
        if(event.target){
            let  attri = await event.target;
            let id = await attri.id;
          val += parseInt(id);
            attri.setAttribute("id", val);
            btnP.id = val - 1
        }
        pagV.textContent = val;
        FecthAppi(val);

    }

async function FecthAppi(page) {
        let keys = "a95ec60e9a88a573e16e1f5e3985c19e";
        let bloc = document.querySelector(".bloc");
        let linkBase = "https://api.themoviedb.org/3/";
        let data = await fetch(`${linkBase}discover/movie?page=${page}&api_key=${keys}`);
        let val = await data.json();
        console.log(val)
        let valeur = await val.results;
        bloc.textContent = ""
        for (let i = 0; i < valeur.length; i++) {
            let imgs = document.createElement("img") 
            let card = document.createElement("a")
            card.href=`../page/detail.html#${valeur[i].id}`
            card.className ="card"
            let text = `
            <img src="https://image.tmdb.org/t/p/w500/${valeur[i].poster_path}" alt="">
            <div class="pourc"> <span>${valeur[i].vote_average*10}</span> %</div>
            <div class="info">
                <h3 class="tittle">${valeur[i].title}</h3>
                <p class="lang">${valeur[i].release_date}</p>
            </div>
            `
            card.innerHTML = text
            bloc.appendChild(card)
        }
        // value.forEach(element => { 
        // });
}




