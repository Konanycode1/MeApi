document.addEventListener("DOMContentLoaded",async ()=>{
    let keys = "a95ec60e9a88a573e16e1f5e3985c19e";
    let linkBase = "https://api.themoviedb.org/3/";
    let id =  location.href;
    let tab = id.split("#");
    console.log(tab)
    let data = await fetch(`${linkBase}movie/${tab[1]}?api_key=${keys}`)
    data = await data.json();
    console.log(data);
    
})