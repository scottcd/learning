const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let fileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
let altTexts = ['eye', '?', 'flower', 'hyro', 'butterfly'];

/* Looping through images */
for (i = 0; i < fileNames.length; i++){
    const newImage = document.createElement('img');
    const fileName = `images/${fileNames[i]}`;
    const altText = `${altTexts[i]}`;
    
    newImage.setAttribute('src', fileName);
    newImage.setAttribute('alt', altText);
    thumbBar.appendChild(newImage);    

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', fileName);
        newImage.setAttribute('alt', altText);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    let className = btn.getAttribute('class');
    
    if (className === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});