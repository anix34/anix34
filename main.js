const generateMemeBtn = document.querySelector(".btn" );
const nameImage = document.querySelector("img");
const nameTitle = document.querySelector(".top-text");
const memeAuthor = document.querySelector(".bottom-text");
const toptextinput = document.querySelector("#meme-top-text")
const bottomtextinput = document.querySelector("#meme-bottom-text")

const updateDetails = (url, title, author) => {
    nameImage.setAttribute("src", url);
    nameTitle.innerText = title;
    memeAuthor.innerText = author;
};

const generateMeme = () => {
    // fetch("https://images.unsplash.com/photo-1648046882833-d3dfdc5e2e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80").then(
    // (response) => response.json()).then((data) => {
    //     console.log(data)
    //     updateDetails(data.url, data.title, data.author);
    // });
    updateDetails(
        "https://images.unsplash.com/photo-1648046882833-d3dfdc5e2e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        toptextinput.value,
        bottomtextinput.value
    )
};

generateMemeBtn.addEventListener("click", generateMeme);