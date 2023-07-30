const addBtn = document.querySelector(".addBtn")
const popup = document.querySelector(".popup")
const section = document.querySelector("section")
const sub = document.querySelector(".sub")



addBtn.addEventListener("click", () => {
    popup.style.display = "flex"
    section.style.filter = "blur(8px)"
})

sub.addEventListener("click", () => {
    popup.style.display = "none"
    section.style.filter = ""
})
