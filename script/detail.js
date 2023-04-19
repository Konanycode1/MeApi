document.addEventListener("DOMContentLoaded",async ()=>{
    let keys = "a95ec60e9a88a573e16e1f5e3985c19e";
    let linkBase = "https://api.themoviedb.org/3/";
    let tof = document.querySelector(".tof");
    let titre = document.querySelector(".titre");
    let id =  location.href;
    let tab = id.split("#");
    let content = document.querySelector(".content");
    console.log(tab)
    let data = await fetch(`${linkBase}movie/${tab[1]}?api_key=${keys}`)
    data = await data.json();
    console.log(data);
    let img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path
}`  
    // content.style.background = `url("https://image.tmdb.org/t/p/w500/${data.backdrop_path}")`
    // content.style.backgroundSize = "cover"

    tof.appendChild(img)
    titre.innerText = data.title

    
})