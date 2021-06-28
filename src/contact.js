const contact = (() => {

    const createContact = () => {
        const divh1 = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.textContent = 'Contact Us';

        const divh2img = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = 'Tako Tome, 123-456-7890';

        const img = document.createElement('img');
        img.setAttribute('src', 'https://image.freepik.com/free-vector/cartoon-japanese-chef-presenting-food-sushi_61878-755.jpg');
        img.setAttribute('alt', 'sushichef');
        img.setAttribute('style', 'width:200px;height:200px;');

        divh1.appendChild(h1);
        divh2img.appendChild(h2);
        divh2img.appendChild(img);


        let arr = new Array(divh1, divh2img);
        
        return arr;
    };

    return { createContact }
})();

export default contact;

//   <div>
//   <h1>Contact Us</h1>
// </div>
// <div>
//   <h2>Tako Tome, 123-456-7890</h2>
//   <img src="https://image.freepik.com/free-vector/cartoon-japanese-chef-presenting-food-sushi_61878-755.jpg" style="width:200px;height:200px;">
// </div>