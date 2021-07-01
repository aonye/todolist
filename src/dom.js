//import taskItem from "./todo";


const dom = (() => {

    const assembleTask = (defaultObj) => {
        let li = document.createElement('li');
        appendMainDiv(defaultObj);

        const dueDate = li.querySelector('.duedate');
        let checkbox = makeDiv('container');
        let label = makeCheckbox();
        checkbox.append(label);
        li.append(checkbox);
        
        return li;

        function dateClickHand(event){
            let dateContainer = event.target.parentNode;
            removeAllChildNodes(dateContainer);
            dateContainer.append(makeDateInput());
            event.target.removeEventListener('click', dateClickHand);
        }

        function makeDateInput(){
            let input = document.createElement('input');
            setAttributes(input, {'type': 'date', 'name': 'date', 'id': 'date'});
            return input;
        }

        function priorityClickHand(event){
            //console.log(event.target);
            let priorityContainer = getNthParent(event.target, 2);
            toggleShadow(priorityContainer);

            function toggleShadow(list){
                console.log(list.className);
                if (!list.className){
                    list.classList.add('shadow');
                    console.log(list);
                }
                else {
                    list.classList.remove('shadow');
                    console.log(list);
                }
            }
        }

        function makeButton(){
            let btn = document.createElement('button');
            btn.setAttribute('type', 'button');
            return btn;
        }
    
        function makeDiv(divClass="") {
            let div = document.createElement('div');
            if (divClass){
                div.setAttribute('class', divClass);
            }
            return div;
        }

        function makeCheckbox(){
            let label = document.createElement('label');
            let input = document.createElement('input');
            let span = document.createElement('span');
            setAttributes(input, {'type': 'checkbox', 'checked': 'checked'});
            span.setAttribute('class', 'checkmark');
            label.append(input, span);
            return label;
        }

        function appendMainDiv(obj){
            for (var key in obj){
                let div = document.createElement('div');
                div.setAttribute('class', key);
                appendContent(div,key);
                li.append(div);
            }
        }

        function appendContent(node,key){
            if (key==='title'){
                node.textContent='Title';
            }
            else if (key==='descript'){
                node.textContent='Description';
            }
            else if (key==='duedate'){
                let label = document.createElement('label');
                label.setAttribute('for', 'date');
                label.textContent = 'Due Date: ';
                let div = makeDiv();
                div.addEventListener('click', dateClickHand);
                node.append(label, div);
            }
            else if (key==='priority'){
                let button = makeButton();
                button.addEventListener('click', priorityClickHand);
                node.append(button);
            }
        }
    }

    function setAttributes(element, attrObj){
        for(var key in attrObj) {
            element.setAttribute(key, attrObj[key]);
        }
    }

    const insertNode = (tasklist, emptyTask, newtaskBtn) => {
        tasklist.insertBefore(emptyTask, newtaskBtn);
    }

    const deleteTask = (inputNode) => {
        let parent = getNthParent(inputNode, 3); //selects li
        //console.log(parent);
        parent.remove();
    }

    function getNthParent(elem, n) {
        return n === 0 ? elem : getNthParent(elem.parentNode, n - 1);
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    return { assembleTask, insertNode, deleteTask };
})();

export default dom;