// import _ from 'lodash';
// import myName from './myName';
// import printMe from './print.js';
import taskItem from './todo.js';
import dom from './dom.js';



const component = (() => {
    const title = document.querySelector('.title');
    const tasklist = document.querySelector('.tasklist');
    const newtaskBtn = document.querySelector('.newtask');
    const dueDate = document.querySelectorAll('.duedate div');

    console.log(dueDate);







    // const homeClickHandler = () => {
    //     deleteCurrentContent();
    //     appendContent(homeDisplay);
    // }

    // const menuClickHandler = () => {
    //     deleteCurrentContent();
    //     appendContent(menuDisplay);
    // }

    // const contactClickHandler = () => {
    //     deleteCurrentContent(); 
    //     appendContent(contactDisplay);
    // }

    // const appendContent = (arr) => {
    //     const div = document.createElement('div');
    //     div.classList.add('firstchild');
    //     for (let i=0; i < arr.length; i++){
    //         div.appendChild(arr[i]);
    //     }
    //     container.append(div);
    // }

    // const deleteCurrentContent = () => {
    //     let firstchild = document.querySelector('.firstchild');
    //     container.removeChild(firstchild);

   
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    
    //element.innerHTML = myName('Cody');
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
  
    // element.appendChild(btn);
  
    //return element;

    function addXBtnListener(){
        let inputList = document.querySelectorAll('div.container input[type="checkbox"]');
        inputList.forEach((button) => button.addEventListener('change', changeHandler));
    }

    function changeHandler(event){
        dom.deleteTask(event.target);
    }

    function newTaskHandler(){
        let emptyTask = taskItem();
        emptyTask = dom.assembleTask(emptyTask);
        dom.insertNode(tasklist, emptyTask, newtaskBtn);
        addXBtnListener();
    }

    newtaskBtn.addEventListener('click', newTaskHandler);


    return;
    
})();

  
//document.body.appendChild(component());