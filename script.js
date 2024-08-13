

var sectionLinks = document.getElementsByClassName("section-links");
var sectionContents = document.getElementsByClassName("section-contents");

function openSection(tabName){
    event.preventDefault();
    for(sectionLink of sectionLinks){
        sectionLink.classList.remove("active-link");
    }
    for(sectionContent of sectionContents){
        sectionContent.classList.remove("active-section");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-section");
}

function showSidebar(){
    event.preventDefault();
    const sidebar = document.getElementById('portfolio-links-sidebar');
    sidebar.style.display = 'flex';
}

function closeSidebar(){
    event.preventDefault();
    const sidebar = document.getElementById('portfolio-links-sidebar');
    sidebar.style.display = "none";
}
const nameData = document.getElementById('name');
const emailData = document.getElementById('email');
const subjectData = document.getElementById('subject');
const messageData = document.getElementById('message');
function handleSubmit(){
    if((nameData.value && emailData.value && subjectData.value && messageData.value) !== ""){
        alert("Thanks for your feedback")
    } else{
        alert("First Insert all data")
    }
}

const darkMode = document.getElementById('dark-mode-button');
let isDarkMode = true;
const body = document.getElementById('body');
darkMode.addEventListener('click',()=>{
    event.preventDefault();
    isDarkMode == true ? enableLightMode() : disableLightMode();
})

function enableLightMode(){
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    isDarkMode = false;
    
}
function disableLightMode(){
    body.style.backgroundColor = "#141414";
    body.style.color = "#e6e3e3";
    isDarkMode = true;
}