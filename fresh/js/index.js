document.querySelector('#btn1').addEventListener('click', (e) => {
    getCompleted()
})
function getCompleted(){
    let values = []

    checked = document.querySelectorAll('input[type=checkbox]:checked')
    checked.forEach(chk => values.push(chk.value))
    console.log(values)
}
window.addEventListener('DOMContentLoaded',event=>{
    div_data = document.querySelector('#contaniner')
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        div_data.innerHTML +=
        `<input type="checkbox" id="${element.id}" ${element.completed?"checked":""}>
        <label for="${element.id}"> ${element.title} </label><br/>`
    });
    getCompleted()
  })
  .catch(error => console.error(error));
})

document.querySelector('#btn2').addEventListener('click', (e) => {
    let checkAll = document.querySelectorAll('input[type=checkbox]')
    checkAll.forEach(function(checkbox) {
        checkbox.checked=true;
    })
})

document.querySelector('#btn3').addEventListener('click', (e) => {
    let uncheckall = document.querySelectorAll('input[type=checkbox]')
    uncheckall.forEach(function(checkbox) {
        checkbox.checked=false;
    })
})

