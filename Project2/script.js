const input = document.querySelector('input')
const searchTerm = input.value
const cardGrid = document.querySelector(".cardGrid")


const getMovie = () => {
    fetch(`https://www.omdbapi.com/?s=%22dark%22&apikey=fd998d3`).then((res) => {
        return res.json()
    }).then((result) => {
        const { Search } = result
        let r = ""
        console.log(Search[0].Title);
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

    })
}

input.addEventListener("change", getMovie); 