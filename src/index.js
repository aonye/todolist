// import _ from 'lodash';
// import myName from './myName';
// import printMe from './print.js';
import taskItem from './todo.js';
import dom from './dom.js';
import storage from './storage.js';

//localStorage.clear();

const component = (() => {
    const tasklist = document.querySelector('.tasklist');
    const newtaskBtn = document.querySelector('.newtask');

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
        let parentList = dom.getNthParent(event.target, 2);
        let mainDiv = event.target.parentNode;
        let div = event.target;
        let input = event.target.nextElementSibling;
        dom.toggleNode(div); //div off, input on
        dom.toggleNode(input);
        storage.showStorage();
        input.addEventListener('keypress', enterHandler);

        function enterHandler(event){
            if (event.key==='Enter'){
                dom.toggleNode(event.target); //input off, div back on
                dom.toggleNode(div);
                div.textContent = event.target.value;
                storage.updateVal(parentList.id, mainDiv.className, event.target.value);
                input.removeEventListener('keypress', enterHandler);
                storage.showStorage();
            }
        }
    }

    function dateClickHand(event){
        let dateContainer = event.target.parentNode;
        dom.removeAllChildNodes(dateContainer);
        dateContainer.append(dom.makeDateInput());
        event.target.removeEventListener('click', dateClickHand);

        let input = dateContainer.querySelector('input');
        input.addEventListener('change', dateInputHand);
    }

    function dateInputHand(event){
      let parentList = dom.getNthParent(event.target, 2);
      storage.updateVal(parentList.id, 'duedate', event.target.value);
      storage.showStorage();
    }

    function priorityClickHand(event){
        let parentList = dom.getNthParent(event.target, 2);
        let prioDiv = event.target.parentNode;
        let shadowStatus = dom.toggleShadow(parentList, prioDiv); //returns status
        console.log(parentList.id);
        console.log(shadowStatus);
        storage.updateVal(parentList.id, 'priority', shadowStatus);
        storage.showStorage();
    }

    function XBtnClickHandler(event){
        let list = dom.getNthParent(event.target, 3);
        let index = storage.removeByID(list.id);
        dom.deleteTask(event.target);
        storage.showStorage();
    }

    const assignEventHandlers = (domnodes) => {
        addTextEvent(domnodes.querySelector('.title div'));
        addTextEvent(domnodes.querySelector('.descript div'));
        checkDateNode(domnodes);
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

        function checkDateNode(domnodes){
          if(domnodes.querySelector('.duedate div')){
            addDateEvent(domnodes.querySelector('.duedate div'));
          }
          else {
            let input = domnodes.querySelector('.duedate input');
            input.addEventListener('change', dateInputHand);
          }
        }
    
        function addXBtnListener(input){
            input.addEventListener('change', XBtnClickHandler);
        }
    }


    newtaskBtn.addEventListener('click', newTaskHandler);


  //   const appendCurrentContent = () => {
  //     let roger = taskItem('id0', 'chicken', 'tenders', '2021-07-08', 'high');
  //     let sam = taskItem('id1', 'aa', 'bb', '', 'normal');
  //     let t1 = dom.assembleTask(roger);
  //     let t2 = dom.assembleTask(sam);
  //     dom.insertNode(tasklist, t1, newtaskBtn);
  //     dom.insertNode(tasklist, t2, newtaskBtn);
  //     assignEventHandlers(t1);
  //     assignEventHandlers(t2);
  //     storage.updateID(t1, roger);
  //     storage.updateID(t2, sam);
  //     storage.showStorage();
  // }

  // appendCurrentContent();

  const initDisplay = () => {
    let arr = storage.retrieveStorage();
    for (let i = 0; i < arr.length; i++){
      let emptyTask = dom.assembleTask(arr[i]);
      dom.insertNode(tasklist, emptyTask, newtaskBtn);
      assignEventHandlers(emptyTask);
    }
  }
  
  initDisplay();


  return;
    
})();

export default component;
//document.body.appendChild(component());


/*
      <!--
      <li>
        <div class="title">Cook Dinner</div>
        <div class="descript">Chicken Broccoli Bake</div>
        <div class="duedate">
          <label for="date">Due Date: </label>
          <div></div>
        </div>
        <div class="priority">
          <button type="button"></button>
        </div>
        <div class="container">
          <label>
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
          </label>
        </div>
      </li>
      -->
      <li>
        <div class="title">Title</div>
        <div class="descript">Description</div>
        <div class="duedate">
          <label for="date">Due Date: </label>
          <div></div>
        </div>
        <div class="priority">
          <button type="button"></button>
        </div>
        <div class="container">
          <label>
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
        </div>
      </li>
      */