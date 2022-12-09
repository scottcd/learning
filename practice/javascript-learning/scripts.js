for (let i = 0; i < 4; i++) {
    createButton(i);
}

function createButton(button_number) {
    const button = document.createElement("button");
    button.innerText = `Button ${button_number}`;
    button.id = `button-${button_number}`;
    button.className = `article-button`;
    
    button.onclick = function () {
        selectButton(button_number);
    }

    document.body.appendChild(button);
}

async function selectButton(article_number) {
    const buttons = document.getElementsByClassName(`article-button`);
    
    // remove all of the created buttons
    while(buttons.length > 0){
        buttons[0].parentNode.removeChild(buttons[0]);
    }

    let json_obj =  await readJSON() 
    
    // create the selected article
    const selected_article = document.createElement("p")
    selected_article.innerText = `${json_obj.title}`
    
    document.body.appendChild(selected_article);    
}

async function readJSON() {
    let url = 'http://0.0.0.0:81/'
    
    let response = await fetch(url);
    let article = await response.json();
    console.log(article);
    
    return await article;
}