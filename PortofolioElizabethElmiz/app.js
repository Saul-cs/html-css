document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("animation").style.color = "#2ecc71"
    new TypeIt(".animation", {
        speed:200,
        loop:true
    })
    .type('Elizabeth Elmiz', {delay: 900})
    .pause(5000)
    .delete(15)
    .type('Fotógrafa', {delay: 500 })
    .pause(4000)
    .delete(9)
    .type('Designer')
    .pause(3000)

    .go()
})
