
const displayButtons = (paginatedResult,activeIndex,buttonContainer) => {
  const res= paginatedResult.map((_,index)=>{
   return `<button class="page-btn ${index === activeIndex ? "active-btn":"null"}" data-index="${activeIndex}" >
   ${index+1}
   </button>
   `
  });
  res.push(`<button class="next-btn">
  Next
  </button>`)
  res.unshift(`<button class="prev-btn">
  Prev
  </button>`)
  buttonContainer.innerHTML=res.join("");
}

export default displayButtons
