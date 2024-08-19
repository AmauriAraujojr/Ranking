

{/* const createRanking = (ranking, position, first) => {

    // console.log(ranking)
    const players = document.createElement("div")
    const imgContainer = document.createElement("div")
    const playerImg = document.createElement("img")
    const playerName = document.createElement("h4")
    const playerValue = document.createElement("h4")
    const playerBox = document.createElement('div')

    players.classList.add("players")
    imgContainer.classList.add("img_box")
    playerName.classList.add("name")
    playerValue.classList.add("value")
    playerBox.classList.add('box')

    if(position%2==0){
        players.classList.add('par')
    }


    const not_btn = document.createElement('button')
    not_btn.innerText = 'Voltar'
    not_btn.classList.add("btn_back")




    if (ranking.message) {
        const not_box = document.createElement('div')
        const not_msg = document.createElement('h3')

        not_msg.innerText = ranking.message

        not_box.classList.add("notFound_container")

        not_box.append(not_msg, not_btn)

        players.append(not_box)


        return players
    }


    if (position == 1 && first) {
        playerImg.src = "https://res.cloudinary.com/dcyrneauz/image/upload/v1724085406/Ouro_1_ok7zn4.png"
        imgContainer.appendChild(playerImg)
    }
    else if (position == 2 && first) {
        playerImg.src = "https://res.cloudinary.com/dcyrneauz/image/upload/v1724085524/Prata_1_xt29bz.png"
        imgContainer.appendChild(playerImg)
    }
    else if (position == 3 && first) {
        playerImg.src = "https://res.cloudinary.com/dcyrneauz/image/upload/v1724085609/Bronze_1_zvz0qk.png"
        imgContainer.appendChild(playerImg)
    }

    else (
        imgContainer.innerText = `${position}º`
    )
    playerName.innerText = ranking.nome
    playerValue.innerText = `R$ ${ranking.total_deposit}`


    playerBox.append(imgContainer, playerName)
    players.append(playerBox, playerValue)

    if (!first) {
        players.append(not_btn)
    }

    return players
}






 */}
