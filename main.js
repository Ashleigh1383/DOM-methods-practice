
let submitButton = document.createElement('button')
submitButton.append('Submit')
document.body.append(submitButton)
submitButton.addEventListener("click", function(){
    mainElement.remove()
})


let mainElement = document.createElement('main')
document.body.append(mainElement)
let imgElement = document.createElement('img')
imgElement.src = 'https://sites.psu.edu/siowfa14/wp-content/uploads/sites/13467/2014/10/c70313bfad0a7005184b8af61245b6c7.jpg'
imgElement.className = 'image'
mainElement.append(imgElement)

let anchorElement = document.createElement('a')
anchorElement.href = 'http://www.google.com'
anchorElement.append('Google')
anchorElement.className = 'link'
mainElement.append(anchorElement)


let textInput = document.createElement('input')
textInput.type = 'text'
document.body.append(textInput)




let removeButton = document.createElement('button')
removeButton.append('Remove')
document.body.append(removeButton)
removeButton.addEventListener("click", function() {
    textInput = document.querySelector('input')
    let inputText = textInput.value
    let newElement = document.querySelector(inputText)
    console.log(newElement);
    
    newElement.remove()
    
}
)
let textInput2 = document.createElement('input')
textInput2.type = 'text'
document.body.append(textInput2)

let addButton = document.createElement('button')
addButton.append('Add')
document.body.append(addButton)
addButton.addEventListener("click", function(){
    let newContent = textInput2.value
    let newDiv = document.createElement('div')
    
    console.log(newDiv);
    document.body.append(newDiv)
    newDiv.append(newContent)
    console.log(newContent);
    
     
    
    
}

)
