console.log("hello world")

window.onload = function(){



    const banner = document.querySelector(".banner")
    const passcode_form = document.getElementById("passcode-form")
    const passcode_value = document.getElementById("passcode")

    passcode_form.addEventListener('submit', function(e){
        let user_input = passcode_value.value
        user_input = user_input.toUpperCase().trim()
        if (user_input != "TEO"){ 
            e.preventDefault()
            passcode_value.value = ""
            passcode_value.placeholder = "Wrong passcode"

        }
        else{
            e.preventDefault()
            let transition_div = document.createElement("div") 
            transition_div.classList.add('transition-div')
            banner.appendChild(transition_div)


            let debounce
            let counter = 0
            debounce = setInterval(function(){
                console.log(counter)
                counter += 0.01
                yeet = counter.toString()
                transition_div.style.opacity = yeet

                if (counter > 1){
                    clearInterval(debounce)
                    passcode_form.submit()
                }
            }, 20)
        }
    })
}