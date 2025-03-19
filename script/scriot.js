// const age = 10;

// localStorage.setItem("my age", age)

// localStorage.getItem("my age")

// const handleAddToStorage=()=>{
//     // console.log('hiiii')
//     const name = 'tamanna'
//     localStorage.setItem("name", name)
// }



// **    object


const handleAddToStorage =()=>{
    const person = {
        name:'rumpa',
        age: 43,
        friend:["lima ,ruba"]
    }
    // localStorage.setItem('details', person)
    const covertedString = JSON.stringify(person);
    const persObject = JSON.parse(covertedString)
    console.log(persObject.friend)
    localStorage.setItem("details", covertedString)
}