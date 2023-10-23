
function wishes(){
    value=document.getElementById('input').value
     console.log(value)
    if(value==0){
        alert('Enter Your Name')}
        else{
    document.getElementById("main").style.display = "none"
    document.getElementById('wish').style.display='block'
    document.getElementById('name').innerText=` 
    ${value}`
    }

}