const addBtn = document.querySelector(".addBtn")
const popup = document.querySelector(".popup")
const section = document.querySelector("section")
const sub = document.querySelector(".sub")

const blogUrl = document.getElementById("blogUrl")
const blogTitle = document.getElementById("blogTitle")
const blogDescription = document.getElementById("blogDescription")
const blogText = document.getElementById("blogText")

const blogBtn = document.querySelector(".blogBtn")
// const readBtn = document.querySelector(".readBtn")

const blogsGrid = document.querySelector(".blogs")
let blogs = ""

blogBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const blog = {
        blogUrl: blogUrl.value,
        blogTitle: blogTitle.value,
        blogDescription: blogDescription.value,
        blogText: blogText.value
    }

    blogs = `<div class="card">
    <img src=${blog.blogUrl}>
    <h2>${blog.blogTitle}</h2>
    <p>${blog.blogDescription}</p>
    <button class="readBtn">Read</button>
    </div>`

    if (localStorage.length > 1) {
        localStorage.setItem(`${blog.blogTitle}`, JSON.stringify(blog))
        let items = localStorage.getItem("blogs")
        items += blogs
        localStorage.setItem("blogs", items)
        blogsGrid.innerHTML = items
        popup.style.display = "none"
        section.style.filter = ""
        return
    }
    localStorage.setItem(`${blog.blogTitle}`, JSON.stringify(blog))
    localStorage.setItem("blogs", `${blogs}`)
    blogsGrid.innerHTML = blogs
    popup.style.display = "none"
    section.style.filter = ""

})

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    popup.style.display = "flex"
    section.style.filter = "blur(8px)"
})

sub.addEventListener("click", (e) => {
    e.preventDefault()
    popup.style.display = "none"
    section.style.filter = ""
})

function loadData() {
    const items = localStorage.getItem("blogs")
    blogsGrid.innerHTML = items
}

// readBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("clicked on read");
// })
