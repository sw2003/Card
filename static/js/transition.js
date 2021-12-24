window.onload = function(){
    const video = document.querySelector(".intro-video")
    const text = document.querySelector(".first-text")
    const container = document.querySelector(".verb-container")
    const btn = document.querySelector(".the-btn")


    let debounce
    let r = 255
    let g = 255
    let b = 255

    debounce = setInterval(function(){
        r -= 1
        g -= 1
        b -= 1
        
        r_str = r.toString()
        g_str = g.toString() 
        b_str = b.toString()

        document.body.style.backgroundColor = 'rgb(' + r_str + ',' + g_str + ',' + b_str + ")"

        if (r <= 1){
            clearInterval(debounce)
        }
    }, 20)

    let debounce_b 
    let counter = 0
    debounce_b = setInterval(function(){
        counter += 0.01
        opac_val = counter.toString()
        video.style.opacity = opac_val

        if (counter >= 1){
            clearInterval(debounce_b)
        }

    }, 100)


    window.addEventListener('scroll', function(){
        let difference = text.getBoundingClientRect().top
        let window_height = window.innerHeight
        if (difference < window_height-150){
            text.classList.add('active')
        }
        else{
            text.classList.remove('active')
        }

        let container_difference = container.getBoundingClientRect().top
        if (difference < window_height-50){
            container.classList.add('active')
        }
        else{
            container.classList.remove('active')

        }



        



    })

}