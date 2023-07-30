const input = document.querySelector('input')
const cardGrid = document.querySelector(".cardGrid")


const getMovie = () => {

    fetch(`https://www.omdbapi.com/?s=%22${input.value}%22&apikey=fd998d3`).then((res) => {
        return res.json()
    }).then((result) => {
        if (result.Response == "True") {
            const { Search } = result
            let r = ""
            for (let index = 0; index < Search.length; index++) {
                const element = Search[index];
                console.log(element);
                r += ` <div class="card">
                        <img src=${element.Poster} alt="img">
                            <h2>${element.Title}</h2>
                        <button>Watch Now</button>
                  </div>`

            }
            cardGrid.innerHTML = r;
        } else {
            cardGrid.innerHTML = `<h1 class='msg'>${data.Error}</h1>`;
        }
    }).catch(() => {
        cardGrid.innerHTML = `<h1 class="msg">Error Occured</h1>`;
    });
}

input.addEventListener("change", getMovie); 