let scroll = document.querySelector(".scroll");
let count = 0
const tab = [`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam natus laudantium nam quae porro aliquam cupiditate nulla tempore consectetur doloribus nisi repellat dolorum doloremque, magni quaerat eius aspernatur neque possimus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa quisquam suscipit reprehenderit tempore, ullam id debitis autem quidem ut. Placeat consequuntur, at ad minus veniam suscipit sapiente enim numquam.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illum corrupti, veritatis magni dignissimos, sit architecto aspernatur qui omnis vel veniam iure iste obcaecati quos natus molestias dolore inventore sequi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab, distinctio nesciunt soluta eveniet itaque dolorem esse, natus facere, saepe quas non quasi? Impedit, quae sapiente enim perferendis doloribus quos!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi debitis officia voluptate laboriosam fuga, dicta dolorem voluptates quia perspiciatis officiis fugit numquam soluta quibusdam tenetur nesciunt quos itaque. Atque, animi!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates rem fugit praesentium laudantium eius, blanditiis quia nemo ipsa dignissimos maiores ipsum nesciunt voluptas laborum? A dolores magni suscipit sunt dolorem?
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima asperiores maxime veniam eligendi minus odio consequuntur doloribus corrupti. Magnam laboriosam neque consequatur ducimus. Quos enim repellat quasi eos officia impedit.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et magnam reiciendis reprehenderit odio. Distinctio, voluptatibus excepturi unde eius dolore enim quibusdam explicabo maiores veritatis eligendi assumenda qui repellat sit eos.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam natus laudantium nam quae porro aliquam cupiditate nulla tempore consectetur doloribus nisi repellat dolorum doloremque, magni quaerat eius aspernatur neque possimus.`,

`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa quisquam suscipit reprehenderit tempore, ullam id debitis autem quidem ut. Placeat consequuntur, at ad minus veniam suscipit sapiente enim numquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illum corrupti, veritatis magni dignissimos, sit architecto aspernatur qui omnis vel veniam iure iste obcaecati quos natus molestias dolore inventore sequi?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab, distinctio nesciunt soluta eveniet itaque dolorem esse, natus facere, saepe quas non quasi? Impedit, quae sapiente enim perferendis doloribus quos!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi debitis officia voluptate laboriosam fuga, dicta dolorem voluptates quia perspiciatis officiis fugit numquam soluta quibusdam tenetur nesciunt quos itaque. Atque, animi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates rem fugit praesentium laudantium eius, blanditiis quia nemo ipsa dignissimos maiores ipsum nesciunt voluptas laborum? A dolores magni suscipit sunt dolorem?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima asperiores maxime veniam eligendi minus odio consequuntur doloribus corrupti. Magnam laboriosam neque consequatur ducimus. Quos enim repellat quasi eos officia impedit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et magnam reiciendis reprehenderit odio. Distinctio, voluptatibus excepturi unde eius dolore enim quibusdam explicabo maiores veritatis eligendi assumenda qui repellat sit eos.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam natus laudantium nam quae porro aliquam cupiditate nulla tempore consectetur doloribus nisi repellat dolorum doloremque, magni quaerat eius aspernatur neque possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa quisquam suscipit reprehenderit tempore, ullam id debitis autem quidem ut. Placeat consequuntur, at ad minus veniam suscipit sapiente enim numquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illum corrupti, veritatis magni dignissimos, sit architecto aspernatur qui omnis vel veniam iure iste obcaecati quos natus molestias dolore inventore sequi?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab, distinctio nesciunt soluta eveniet itaque dolorem esse, natus facere, saepe quas non quasi? Impedit, quae sapiente enim perferendis doloribus quos!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi debitis officia voluptate laboriosam fuga, dicta dolorem voluptates quia perspiciatis officiis fugit numquam soluta quibusdam tenetur nesciunt quos itaque. Atque, animi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates rem fugit praesentium laudantium eius, blanditiis quia nemo ipsa dignissimos maiores ipsum nesciunt voluptas laborum? A dolores magni suscipit sunt dolorem?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima asperiores maxime veniam eligendi minus odio consequuntur doloribus corrupti. Magnam laboriosam neque consequatur ducimus. Quos enim repellat quasi eos officia impedit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et magnam reiciendis reprehenderit odio. Distinctio, voluptatibus excepturi unde eius dolore enim quibusdam explicabo maiores veritatis eligendi assumenda qui repellat sit eos.`
           
            ,`
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam natus laudantium nam quae porro aliquam cupiditate nulla tempore consectetur doloribus nisi repellat dolorum doloremque, magni quaerat eius aspernatur neque possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa quisquam suscipit reprehenderit tempore, ullam id debitis autem quidem ut. Placeat consequuntur, at ad minus veniam suscipit sapiente enim numquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illum corrupti, veritatis magni dignissimos, sit architecto aspernatur qui omnis vel veniam iure iste obcaecati quos natus molestias dolore inventore sequi?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab, distinctio nesciunt soluta eveniet itaque dolorem esse, natus facere, saepe quas non quasi? Impedit, quae sapiente enim perferendis doloribus quos!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi debitis officia voluptate laboriosam fuga, dicta dolorem voluptates quia perspiciatis officiis fugit numquam soluta quibusdam tenetur nesciunt quos itaque. Atque, animi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates rem fugit praesentium laudantium eius, blanditiis quia nemo ipsa dignissimos maiores ipsum nesciunt voluptas laborum? A dolores magni suscipit sunt dolorem?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima asperiores maxime veniam eligendi minus odio consequuntur doloribus corrupti. Magnam laboriosam neque consequatur ducimus. Quos enim repellat quasi eos officia impedit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et magnam reiciendis reprehenderit odio. Distinctio, voluptatibus excepturi unde eius dolore enim quibusdam explicabo maiores veritatis eligendi assumenda qui repellat sit eos.`
            
            ,`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam natus laudantium nam quae porro aliquam cupiditate nulla tempore consectetur doloribus nisi repellat dolorum doloremque, magni quaerat eius aspernatur neque possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa quisquam suscipit reprehenderit tempore, ullam id debitis autem quidem ut. Placeat consequuntur, at ad minus veniam suscipit sapiente enim numquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illum corrupti, veritatis magni dignissimos, sit architecto aspernatur qui omnis vel veniam iure iste obcaecati quos natus molestias dolore inventore sequi?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab, distinctio nesciunt soluta eveniet itaque dolorem esse, natus facere, saepe quas non quasi? Impedit, quae sapiente enim perferendis doloribus quos!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi debitis officia voluptate laboriosam fuga, dicta dolorem voluptates quia perspiciatis officiis fugit numquam soluta quibusdam tenetur nesciunt quos itaque. Atque, animi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates rem fugit praesentium laudantium eius, blanditiis quia nemo ipsa dignissimos maiores ipsum nesciunt voluptas laborum? A dolores magni suscipit sunt dolorem?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima asperiores maxime veniam eligendi minus odio consequuntur doloribus corrupti. Magnam laboriosam neque consequatur ducimus. Quos enim repellat quasi eos officia impedit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et magnam reiciendis reprehenderit odio. Distinctio, voluptatibus excepturi unde eius dolore enim quibusdam explicabo maiores veritatis eligendi assumenda qui repellat sit eos.`]



scroll.addEventListener("scroll", (e)=>{
    console.log(e.currentTarget.scrollTop+e.currentTarget.clientHeight)

    if(e.currentTarget.scrollTop+e.currentTarget.clientHeight < e.currentTarget.scrollHeight){
        count = (count === tab.length-1)? 0:count+1

        console.log("ok",count);
        scroll.textContent += tab[count];
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    scroll.textContent = tab[count];
})
