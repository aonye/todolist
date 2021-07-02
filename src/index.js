// import _ from 'lodash';
// import myName from './myName';
// import printMe from './print.js';
import taskItem from './todo.js';
import dom from './dom.js';
import storage from './storage.js';

localStorage.clear();

const component = (() => {
    const title = document.querySelector('.title');
    const tasklist = document.querySelector('.tasklist');
    const newtaskBtn = document.querySelector('.newtask');
    const dueDate = document.querySelectorAll('.duedate div');

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

    function newTaskHandler(){
        let emptyTaskObj = taskItem();
        let emptyTask = dom.assembleTask(emptyTaskObj);
        dom.insertNode(tasklist, emptyTask, newtaskBtn);
        assignEventHandlers(emptyTask);
        storage.updateID(emptyTask, emptyTaskObj);
    }

    function textClickHand(event){
        let arr = dom.appendTextNode(event);
        let removedDiv = arr[0];
        let input = arr[1];
        
        input.addEventListener('keypress', enterHandler);

        function enterHandler(event){
            if (event.key==='Enter'){
                dom.appendTextContent(removedDiv, event);
            }
        }
    }

    function dateClickHand(event){
        let dateContainer = event.target.parentNode;
        dom.removeAllChildNodes(dateContainer);
        dateContainer.append(dom.makeDateInput());
        event.target.removeEventListener('click', dateClickHand);
    }

    function priorityClickHand(event){
        let listCont = dom.getNthParent(event.target, 2);
        dom.toggleShadow(listCont, event.target.parentNode);
        let updatedClass = event.target.parentNode.classList[1];
        storage.updateVal(listCont.id, updatedClass, 'priority');
        storage.showStorage();
    }

    function XBtnClickHandler(event){
        let list = dom.getNthParent(event.target, 3);
        let index = storage.removeByID(list.id);
        dom.deleteTask(event.target);
        storage.showStorage();
    }

    const assignEventHandlers = (domnodes) => {
        addTextEvent(domnodes.querySelector('.title'));
        addTextEvent(domnodes.querySelector('.descript'));
        addDateEvent(domnodes.querySelector('.duedate div'));
        addPriorityEvent(domnodes.querySelector('.priority button'));
        addXBtnListener(domnodes.querySelector('.container label input')); 
        
        function addTextEvent(node){
            node.addEventListener('click', textClickHand);
        }

        function addPriorityEvent(button){
            button.addEventListener('click', priorityClickHand);
        }
    
        function addDateEvent(duedate){
            duedate.addEventListener('click', dateClickHand);
        }
    
        function addXBtnListener(input){
            input.addEventListener('change', XBtnClickHandler);
        }
    }

    newtaskBtn.addEventListener('click', newTaskHandler);


    return;
    
})();

export default component;
//document.body.appendChild(component());