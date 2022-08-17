function toggleMenu(){
    document.getElementById("sally").classList.toggle("open");
    document.getElementById("hamburgerbtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerbtn');
x.onlick = toggleMenu; 

