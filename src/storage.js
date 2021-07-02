const storage = (() => {

    const getCount = () => {
        let count = localStorage.getItem('count');
        if (!count){
            count = 0;
        }
        return count;
    }

    const incrementCount = () => {
        let count = getCount();
        count++;
        localStorage.setItem('count', count);
    };

    const showStorage = () => {
        let tasks = JSON.parse(localStorage.getItem('projectTaskArr'));
        console.log(tasks);
    };

    const retrieveStorage = () => {   
        let tasks = JSON.parse(localStorage.getItem('projectTaskArr'));
        if (!tasks){
            tasks = [];
        }
        return tasks;
    };

    const setStorage = (obj) => {
        let arr = retrieveStorage();
        arr.push(obj);
        localStorage.setItem('projectTaskArr', JSON.stringify(arr));
    };

    const updateID = (domnodes, obj) => {
        let arr = retrieveStorage();
        let id = domnodes.id;
        obj["id"]=id;
        arr.push(obj);
        localStorage.setItem('projectTaskArr', JSON.stringify(arr));
    };

    const removeByID = (id) => {
        let arr = retrieveStorage();
        let index = returnIndex(arr,id);
        let newArr = [...arr.slice(0, index), ...arr.slice(index + 1)]
        localStorage.setItem('projectTaskArr', JSON.stringify(newArr));
    }

    // const updateVal = (id, key, val) => {
    //     let arr = retrieveStorage();
    //     let index = returnIndex(arr,id);
    //     if (!newClass){
    //         arr[index][key]='high';
    //     }
    //     else {
    //         arr[index][key]='normal';
    //     }
    //     localStorage.setItem('projectTaskArr', JSON.stringify(arr));
    // };

    const updateVal = (id, key, val) => {
        let arr = retrieveStorage();
        let index = returnIndex(arr,id);
        arr[index][key]=val;
        localStorage.setItem('projectTaskArr', JSON.stringify(arr));
    };

    const returnIndex = (arr, id) => {
        let index = arr.findIndex((arr) => arr["id"] === id);
        return index;
    };

    return { retrieveStorage, setStorage, showStorage, updateID, removeByID, updateVal, getCount, incrementCount }
})();

export default storage;