const issues = Array.from(document.querySelector('.issues').children);
const btns = document.querySelector('.btns');

const [prev, next] = Array.from(btns.children);
const displayPageNumber = document.querySelector('span');

let pageNumber = 1;

const fetchData = async pageNumber =>{
    const response = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`);
    displayPageNumber.textContent = pageNumber;
    const data = await response.json();
    for(let i = 0; i < data.length; i++){
        issues[i].textContent = data[i].title;
    }
}

fetchData(pageNumber);

prev.addEventListener('click', async () =>{
    if(pageNumber > 1){
        pageNumber -= 1;
        fetchData(pageNumber);
    }
})

next.addEventListener('click', async () =>{
    pageNumber += 1;
    fetchData(pageNumber);
})