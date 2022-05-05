const paginate = (followers) => {
    const items = 9;
    const numberOfPages = Math.ceil(followers.length / items);
    const res= Array.from({length:numberOfPages}).map((_,index)=>{
        const start =  (index)*items;
        return followers.slice(start,start+items);
    })
    return res;
}

export default paginate
