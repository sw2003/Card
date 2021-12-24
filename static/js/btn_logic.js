window.addEventListener('load', function(){
    const btn = document.querySelector(".the-btn")
    const events_container = document.querySelector(".event-container")
    console.log(events_container)


    events_loaded = false

    btn.addEventListener('click', function(){
        console.log("heys")
        fetch("https://api.brawlapi.com/v1/events").then(function(data){
            data.json().then(function(response){
                console.log(response)
                if (events_loaded == false){ 
                    for (let i = 0; i < 9; i++){
                        let mode_data = response.active[i]
                        let name = mode_data["map"]["name"]
                        let new_game_mode_container = document.createElement("div")
                        new_game_mode_container.classList.add("game-mode-container")
                        events_container.appendChild(new_game_mode_container)

                        let name_tag = document.createElement("h1")
                        name_tag.innerHTML = name
                        new_game_mode_container.appendChild(name_tag)

                    }

                    events_loaded = true
                }

            })

        })


    })



})