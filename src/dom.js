const dom = (() => {
    let count = 0;

    const assembleTask = (defaultObj) => {
        let li = document.createElement('li');
        setID(li);
        appendMainDiv(defaultObj);
        let checkbox = makeDiv('container');
        let label = makeCheckbox();
        checkbox.append(label);
        li.append(checkbox);
        return li;

        function setID(list){
            list.setAttribute('id', 'id' + count);
            count++;
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
                let div = document.createElement('div');
                div.setAttribute('class', key);
                appendContent(div,key,obj);
                li.append(div);
            }

            function appendContent(node,key,obj){
                if (key==='title' || key==='descript'){
                    node.textContent=obj[key];
                }
                else if (key==='duedate'){
                    let label = document.createElement('label');
                    label.setAttribute('for', 'date');
                    label.textContent = 'Due Date: ';
                    let div = makeDiv();
                    node.append(label, div);
                }
                else if (key==='priority'){
                    node.classList.add(obj[key]);
                    let button = makeButton();
                    node.append(button);
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

    const appendTextNode = (event) => {
        let div = event.target;
        let input = document.createElement('input');
        setAttributes(input, {'type': 'text', 'id': 'name', 'name': 'name', 'minlength': '1', 'maxlength': '15', 'placeholder': 'Enter to save'});
        let li = div.parentNode;
        insertNode(li, input, div);
        let removedDiv = li.removeChild(div);
        return [removedDiv, input];  
    };

    const appendTextContent = (div, event) => {
        let input = event.target;
        let li = event.target.parentNode;
        div.textContent = input.value;
        insertNode(li, div, input);
        input.remove();
    };

    const toggleShadow = (listContainer, prioDiv) => {
        if (prioDiv.classList.contains('normal')){
            prioDiv.classList.remove('normal');
            listContainer.classList.add('shadow');
        }
        else {
            prioDiv.classList.add('normal');
            listContainer.classList.remove('shadow');
        }
    }
    return { assembleTask, insertNode, deleteTask, removeAllChildNodes, makeDateInput, getNthParent, toggleShadow, appendTextNode, appendTextContent };
})();

export default dom;