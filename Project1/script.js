const addBtn = document.querySelector(".addBtn")
const backBtn = document.querySelector(".backBtn")
const popup = document.querySelector(".popup")
const section = document.querySelector("section")
const article = document.querySelector("article")
const sub = document.querySelector(".sub")
const nav = document.querySelector("nav")

const blogUrl = document.getElementById("blogUrl")
const blogTitle = document.getElementById("blogTitle")
const blogDescription = document.getElementById("blogDescription")
const blogText = document.getElementById("blogText")


const blogBtn = document.querySelector(".blogBtn")

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
    <button class="readBtn" onClick="btnClicked(event)">Read</button>
    </div>`

    if (localStorage.length > 1) {
        localStorage.setItem(`${blog.blogTitle}`, JSON.stringify(blog))
        let items = localStorage.getItem("blogs")
        items += blogs
        localStorage.setItem("blogs", items)
        blogsGrid.innerHTML = items
        popup.style.display = "none"
        section.style.filter = ""
        nav.style.filter = ""
        return
    }
    localStorage.setItem(`${blog.blogTitle}`, JSON.stringify(blog))
    localStorage.setItem("blogs", `${blogs}`)
    blogsGrid.innerHTML = blogs
    popup.style.display = "none"
    section.style.filter = ""
    nav.style.filter = ""


    blogUrl.value = ""
    blogTitle.value = ""
    blogDescription.value = ""
    blogText.value = ""

})

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    popup.style.display = "flex"
    section.style.filter = "blur(8px)"
    nav.style.filter = "blur(8px)"
})

sub.addEventListener("click", (e) => {
    e.preventDefault()
    popup.style.display = "none"
    section.style.filter = ""
    nav.style.filter = ""
})

function loadData() {
    const items = localStorage.getItem("blogs")
    blogsGrid.innerHTML = items
}

const btnClicked = (event) => {
    const e = event.target.parentNode.getElementsByTagName("h2")[0].innerText
    const elementObj = localStorage.getItem(e)
    section.style.display = "none"
    article.style.display = "flex"
    addBtn.style.display = "none"
    backBtn.style.display = "flex"
    const json = JSON.parse(elementObj)
    article.innerHTML = `<div>
    <div class="headingBlog">
        <img src=${json.blogUrl} alt="img">
        <div class="heading">
            <h1>${json.blogTitle}</h1>
            <p>${json.blogDescription}</p>
        </div>
    </div>
    <p>${json.blogText}</p>
</div>`
}

backBtn.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})

