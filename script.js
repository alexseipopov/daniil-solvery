const modalWindow = document.querySelector("#modal")

document.querySelector("#openModal").addEventListener("click", () => {
    tmp(".modal__content")
    modalWindow.classList.toggle("open")
})

modalWindow.addEventListener("click", (e) => {
    e.target.classList.toggle("open")
})

const tmp = (selector) => {
    const target = document.querySelector(selector)
    target.classList.remove("close")
    modalWindow.append(target)
}

// accordion

document.querySelectorAll('.accordion-item').forEach(elem => {
    const header = elem.querySelector('.accordion__header')
    const content = elem.querySelector('.accordion__content')
    header.addEventListener("click", () => {
        document.querySelectorAll('.accordion-item').forEach(elem_ => {
            elem_.querySelector('.accordion__content').classList.remove("open")
        })
        content.classList.toggle("open")
    })
})