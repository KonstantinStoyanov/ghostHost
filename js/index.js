
function currentSlide(n) {
    data = [{
        id: 1,
        text: "“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae.”",
        name: "John Doe"
    }, {
        id: 2,
        text: "text 2",
        name: "Jonny Doe"
    }, {
        id: 3,
        text: "text 3",
        name: "Johnathan Doe"
    }];
    let slide = document.querySelector(".slide")

    let dots = document.querySelectorAll(".slider  .icon");

    if (slide.getAttribute("data-slide") == n) {
        return
    }
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.id == n) {

            slide.setAttribute("data-slide", n)
            slide.innerHTML = `<p>${element.text}</p>`
            document.querySelector(".slider .info p").innerHTML = `${element.name}`

            for (i = 0; i < dots.length; i++) {

                if (dots[i].getAttribute("data-id") == n) {
                    dots[i].className += " active"
                } else {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
            }

        }

    }

};

function slider() {
    let interval = 5000;
    setInterval(() => {
        let id = document.querySelector(".slide").getAttribute("data-slide");
        if (id == 3) { id = 0 }
         id=+id+1
        currentSlide(id)

    }, interval);
};
slider();