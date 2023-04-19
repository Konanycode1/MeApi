let scroll = document.querySelector(".scroll");

scroll.addEventListener("scroll", (e)=>{
    console.log(e.currentTarget.scrollTop+e.currentTarget.clientHeight)
    console.log( e.currentTarget.scrollHeight);
})