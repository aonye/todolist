//import taskItem from "./todo";


const dom = (() => {

    function setAttributes(element, attrObj){
        for(var key in attrObj) {
            element.setAttribute(key, attrObj[key]);
        }
    }

    const assembleTask = (defaultObj) => {
        let li = document.createElement('li');
        appendMainDiv(defaultObj);

        const dueDate = li.querySelector('.duedate');
        console.log(dueDate);
        let checkbox = makeDiv('container');
        let label = makeCheckbox();
        checkbox.append(label);
        li.append(checkbox);
        
        return li;

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
            else if (key==='duedate' || key==='priority'){
                if (key==='duedate'){
                    let div = makeDiv();
                    div.textContent = 'Due Date: ';
                    node.append(div);
                }
                let button = makeButton();
                node.append(button);
            }
        }


    }

    const insertNode = (tasklist, emptyTask, newtaskBtn) => {
        tasklist.insertBefore(emptyTask, newtaskBtn);
    }

    const deleteNode = (inputNode) => {
        let parent = getNthParent(inputNode, 3); //selects li
        //console.log(parent);
        parent.remove();

        function getNthParent(elem, n) {
            return n === 0 ? elem : getNthParent(elem.parentNode, n - 1);
        }
    }

    return { assembleTask, insertNode, deleteNode };
})();

export default dom;