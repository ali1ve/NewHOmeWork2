
function addStudent(name){
    let elementUl = document.querySelector("ul")
    let elementLastLi = document.createElement("li")
    elementLastLi.innerText = name
    elementLastLi.style.backgroundColor = "rgb(172, 250, 250)"
    elementUl.append(elementLastLi)
    

}

addStudent("salam")
addStudent("qurbaqa")
addStudent("")
addStudent("")