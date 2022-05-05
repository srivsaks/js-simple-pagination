let container = document.querySelector(".container");

const display = (followers) => {
 const newFollowers= followers.map((item)=>{
     const {avatar_url,login,html_url} = item;
     return `<article class="card">
     <img src="${avatar_url}" alt="${login}"/>
     <h4>${login}</h4>
     </article>
     `
 }).join("");
 container.innerHTML=newFollowers;
}

export default display
