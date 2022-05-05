import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

let sectionTitle = document.querySelector(".section-title h1")

let index=0;
let followers=[];
const buttonContainer = document.querySelector(".btn-container");

const setUpUI=()=>{
    displayFollowers(followers[index])
    displayButtons(followers,index,buttonContainer)
}

const init = async () => {
    const result = await fetchFollowers();
    if(result.length > 0){
        // displayFollowers(result);
        const paginatedResult = (paginate(result));
        followers = paginatedResult;
        sectionTitle.textContent = "Followers";
        setUpUI();
        //const pages=paginate(result);
        //console.log(pages)
    }
}

window.addEventListener("load",init)

buttonContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-container"))
    return;
    if(e.target.className === "next-btn")
    {
        if(index === followers.length - 1 )
        return;
        index = index+1;
    }
    else if(e.target.className === "prev-btn"){
        if(index === 0 )
        return;
        index=index-1;
    }
    else if(e.target.className === "page-btn null"){
        index=e.target.textContent-1;
    }
    setUpUI();
})
