
const dom = (() => {
    function makeDiv() {
        return document.createElement('div');
    }
    function makeButton(){
        return document.createElement('button');
    };

    const makeCheckbox = () => {
        let label = document.createElement('label');
        let input = document.createElement('input');
        let span = document.createElement('span');
        setAttributes(input, {'type': 'checkbox', 'checked': 'checked'});
        span.setAttribute('class', 'checkmark');
        label.append(input, span);
        return label;
    };

    function setAttributes(element, attrObj){
        for(var key in attrObj) {
            element.setAttribute(key, attrObj[key]);
        }
    }

    const assembleTask = () => {
        let li = document.createElement('li');
        let div = makeDiv();
        div.setAttribute('class', 'container');
        let label = makeCheckbox();

        div.append(label);
        li.append(div);
        return li;
    }

    const deleteNode = (inputNode) => {
        let parent = getNthParent(inputNode, 3); //selects li
        //console.log(parent);
        parent.remove();

        function getNthParent(elem, n) {
            return n === 0 ? elem : getNthParent(elem.parentNode, n - 1);
        }
    }

    return { assembleTask, deleteNode };
})();

export default dom;