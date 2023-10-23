function wishes(){
    let mySound = new Audio('mucic.m4a')
     values=document.getElementById('input').value;
    if(values.trim().length === 0){
        alert('Enter Your Name');
    }
    else{
    document.getElementById("main").style.display = "none";
    document.getElementById('wish').style.display='block';
    document.getElementById('name').innerText=`${values}`;
    document.body.style.backgroundImage="url('https://alayaholidays.com/uploads/media/Dashain%20Festival%20In%20Nepal%20Playing%20Ping%20(3)%20(1).jpg')";
    setTimeout(() => {
        mySound.play();
    }, 4000);
    }

}