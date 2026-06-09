
setTimeout(function(){
console.log('A')

}, 6000

)
console.log('B')
console.log('c')

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(r => r.json())
.then(data => console.log(data))


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(r){
    return r.json();
})
.then(function(data){
    console.log('data')
})


async function fetchData(){
    let r = await
    fetch('https://jsonplaceholder.typicode.com/todos/2');
    let data = await r.json();
    console.log(data);

}
fetchData()


const data = 100 ? 'Yes' : 'No'
console.log(data)