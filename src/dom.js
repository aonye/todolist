import storage from "./storage.js";

const dom = (() => {

    const assembleTask = (obj) => {
        let li = document.createElement('li');
        checkObjID(obj);
        appendMainDiv(obj);
        let checkbox = makeDiv('container');
        let label = makeCheckbox();
        checkbox.append(label);
        li.append(checkbox);
        return li;

        function generateID(li){
            let count = storage.getCount();
            console.log(count);
            li.setAttribute('id', 'id' + count);
            storage.incrementCount(count);
        }

        function checkObjID(obj){
            if (obj["id"]){
                li.setAttribute('id', obj["id"]);
                return;
            }
            else {
                generateID(li);
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
                if (key==='id'){
                    continue;
                }
                let div = makeDiv(key);
                appendContent(div,key,obj);
                li.append(div);
            }

            function appendContent(node,key,obj){
                let val = obj[key];
                switch(key){
                    case('title'):
                    case('descript'): {
                        let div = makeDiv();
                        div.textContent=obj[key];
                        let input = createTextInput();
                        input.style.display = 'none';
                        node.append(div,input);
                        break;
                    }
                    case('duedate'):{
                        if (val===''){
                            makeDateDiv();
                        }
                        else {
                            let input = makeDateInput();
                            input.value = val;
                            node.append(input);
                        }
                        break;
                    }
                    case('priority'): {
                        addShadow(val);
                        node.classList.add(val);
                        let button = makeButton();
                        node.append(button);
                        break;
                    }
                }

                function addShadow(val){
                    if (val==='high'){
                        li.classList.add('shadow');
                    }
                }

                function makeDateDiv(){
                    let label = document.createElement('label');
                    label.setAttribute('for', 'date');
                    label.textContent = 'Due Date: ';
                    let div = makeDiv();
                    node.append(label, div); 
                }

                function createTextInput(){
                    let input = document.createElement('input');
                    setAttributes(input, {'type': 'text', 'name': 'name', 'minlength': '1', 'maxlength': '15', 'placeholder': 'Enter to save'});
                    return input;
                }
            }
        }
    }

    function makeDateInput(){
        let input = document.createElement('input');
        setAttributes(input, {'type': 'date', 'name': 'date', 'id': 'date'});
        return input;
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
        let parentList = getNthParent(inputNode, 3);
        parentList.remove();
    }

    function getNthParent(elem, n) {
        return n === 0 ? elem : getNthParent(elem.parentNode, n - 1);
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const toggleNode = (node) => {
        if (node.style.display==='none'){
            node.style.display='';
        }
        else {
            node.style.display='none';
        }
    };

    const appendTextContent = (div,event) => {
        let input = event.target;
        let li = event.target.parentNode;
        div.textContent = input.value;
        insertNode(li, div, input);
        input.remove();
    };

    const toggleShadow = (parentList, prioDiv) => {
        if (prioDiv.classList.contains('normal')){
            prioDiv.classList.remove('normal');
            parentList.classList.add('shadow');
            return 'high';
        }
        else {
            prioDiv.classList.add('normal');
            parentList.classList.remove('shadow');
            return 'normal';
        }
    };

    return { assembleTask, insertNode, deleteTask, removeAllChildNodes, makeDateInput, getNthParent, toggleShadow, toggleNode, appendTextContent };
})();

export default dom;