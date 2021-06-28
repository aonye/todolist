// import _ from 'lodash';
// import myName from './myName';
// import printMe from './print.js';
import home from './home.js';
import contact from './contact.js';
import menu from './menu.js';


const component = (() => {
    //const element = document.createElement('div');
    const container = document.querySelector('#content');
    const homeTab = document.querySelector('#home');
    const menuTab = document.querySelector('#menu');
    const contactTab = document.querySelector('#contact');

    let homeDisplay = home.createHome();
    //console.log(homeDisplay, 'homedisplay');

    let contactDisplay = contact.createContact();
    //console.log(contactDisplay, 'contactdisplay');

    let menuDisplay = menu.createMenu();
    //console.log(menu2, 'menudisplay');

    const homeClickHandler = () => {
        deleteCurrentContent();
        appendContent(homeDisplay);
    }

    const menuClickHandler = () => {
        deleteCurrentContent();
        appendContent(menuDisplay);
    }

    const contactClickHandler = () => {
        deleteCurrentContent(); 
        appendContent(contactDisplay);
    }

    const appendContent = (arr) => {
        const div = document.createElement('div');
        div.classList.add('firstchild');
        for (let i=0; i < arr.length; i++){
            div.appendChild(arr[i]);
        }
        container.append(div);
    }

    const deleteCurrentContent = () => {
        let firstchild = document.querySelector('.firstchild');
        container.removeChild(firstchild);
    }

    appendContent(homeDisplay);
   
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    
    //element.innerHTML = myName('Cody');
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
  
    // element.appendChild(btn);
  
    //return element;

    homeTab.addEventListener('click', homeClickHandler);
    menuTab.addEventListener('click', menuClickHandler);
    contactTab.addEventListener('click', contactClickHandler);
    
})();

  
//document.body.appendChild(component());