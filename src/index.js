// function greet() {
//     alert{'welcome to my website'};
// }


// const greeting = () => {
//     console.log('I hope you have a nice time using my website')
// };

// greeting()


// let locate= 'Location'
// let age=50
// let hasEaten=false

// let items=[ 25,45, 'food', 'abuja',[12,'laptop',true]]


// console.log(hasEaten)



// let student= {

//     firstname:"Oreofe",
//     age: 75,
//     state:"USA"
// }

// console.log(student.firstname)

// console.log(student['age'])

let buttonOnpage= document.getElementById('btn');

buttonOnpage.addEventListener("click",  
    changeColor, )


// let bodyElement= document.getElementsByTagName('body')
// console.log(bodyElement)

 

let listOfColor =
[ 'lightblue', 'hotpink' , 'green', 'blue' , 'orange' , 'brown', 'burlywood'

]


function changeColor(){
    console.log('done');
    let color = listOfColor[ Math.floor(Math.random()*6)]
    console.log(color)

    document.body.style.backgroundColor= color
   
}





