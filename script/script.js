window.document.addEventListener("DOMContentLoaded", FecthAppi)

async function FecthAppi() {
        let keys = "a95ec60e9a88a573e16e1f5e3985c19e"
        let bloc = document.querySelector(".bloc")

         let data = await fetch(`https://api.themoviedb.org/3//discover/movie?api_key=a95ec60e9a88a573e16e1f5e3985c19e`);
        let val = await data.json();
        console.log(val)
        // .then((reponse)=>{
        //     return reponse.json();
        // })
        // .then((data)=>{
        //     console.log(data)
        // })
        let value = val.results;
        value.forEach(element => {
            let imgs = document.createElement("img") 
            console.log(element)
            imgs.src = `https://image.tmdb.org/t/p/w500/${element.poster_path}`
            bloc.appendChild(imgs)
            
        });
        
           

}



