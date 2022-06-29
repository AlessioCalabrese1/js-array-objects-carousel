const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let contImgVisible = document.getElementById("container-visible-img");
let contThumbnail = document.getElementById("container-thumbnail");

let titleImg = document.createElement("h4");
let text = document.createElement("div");
let textImg = document.getElementById("text_img");

images.forEach((Element, index, Array) => {
    let img = document.createElement("img");
    let thumbnail = document.createElement("img");

    thumbnail.setAttribute("src", Element.url);
    thumbnail.classList.add("thumbnail-img");
    img.setAttribute("src", Element.url);
    img.classList.add("img-fluid");
    if (index === 0) {
        img.classList.add("visible");
    
        titleImg.innerHTML = Element.title;
        textImg.append(titleImg);

        text.innerHTML = Element.description;
        textImg.append(text);
    } else {
        img.classList.add("d-none");
    }
    contImgVisible.append(img);
    contThumbnail.append(thumbnail);
});


let arrImg = document.querySelectorAll("#container-visible-img img");
console.log(arrImg);

let before = document.getElementById("before");
let after = document.getElementById("after");
let i = 0;

after.addEventListener("click", () => {
    let currentImg = document.querySelector(".visible");
    currentImg.classList.remove("visible");
    currentImg.classList.add("d-none");
    i++;
    if(i > arrImg.length - 1)
    {
        i = 0;
    }

    let visibleImg = arrImg[i];
    visibleImg.classList.remove("d-none");
    visibleImg.classList.add("visible");

    textImg.innerHTML = "";
    titleImg.innerHTML = images[i].title;
    textImg.append(titleImg);
    text.innerHTML = images[i].description; 
    textImg.append(text);
});

before.addEventListener("click", () => {
    let currentImg = document.querySelector(".visible");
    currentImg.classList.remove("visible");
    currentImg.classList.add("d-none");
    i--;
    if(i < 0)
    {
        i = arrImg.length - 1;
    }

    let visibleImg = arrImg[i];
    console.log(arrImg[1]);
    visibleImg.classList.remove("d-none");
    visibleImg.classList.add("visible");

    textImg.innerHTML = "";
    titleImg.innerHTML = images[i].title;
    textImg.append(titleImg);
    text.innerHTML = images[i].description; 
    textImg.append(text);
});