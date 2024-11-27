const getReadBook = () =>{
    const storedBook = localStorage.getItem("Read Book");
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}

const saveBook = id =>{
    const storedBook = getReadBook();
    const exist = storedBook.find(bookId => bookId === id);
    if(!exist){
        storedBook.push(id);
        localStorage.setItem("Read Book", JSON.stringify(storedBook));
        // localstorage.setItem("Read Book", JSON.stringify(storedBook))
    }
}

export {getReadBook, saveBook}