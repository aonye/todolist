const menu = (() => {
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    }

    const omakaseMenu = () => {
        let outerDiv = createDiv();
        outerDiv.classList.add('omakase');
        
        let boldText = document.createElement('B');
        boldText.textContent = 'Full Course';
        let innerDiv = createDiv();
        innerDiv.textContent = `Omakase (chef's choice) $100, 15 course`;

        let img = document.createElement('img');
        img.setAttribute('src', "https://static.bangkokpost.com/media/content/dcx/2020/12/11/3835799.jpg");

        outerDiv.append(boldText, innerDiv, img);
        return outerDiv;
    }

    const sushiMenu = () => {
        let outerDiv = createDiv();
        outerDiv.classList.add('grid');

        let menuDiv = createDiv();
        menuDiv.setAttribute('id', 'menusushi');
        let boldText = document.createElement('B');
        boldText.textContent = 'Sushi Menu';
        menuDiv.appendChild(boldText);

        let menu1 = createDiv();
        menu1.textContent = 'Nigiri $3.50/plate';
        let img1 = document.createElement('img');
        img1.setAttribute('src', 'https://images.japancentre.com/recipes/pics/217/main/photo_Nigiri-Sushi.jpg?1469572964');
        menu1.appendChild(img1);

        let menu2 = createDiv();
        menu2.textContent = 'Sashimi $3.00/plate';
        let img2 = document.createElement('img');
        img2.setAttribute('src', "https://www.japan-guide.com/g20/2044_03.jpg");
        menu2.appendChild(img2);

        let menu3 = createDiv();
        menu3.textContent = 'Makimono sushi $2.50/plate';
        let img3 = document.createElement('img');
        img3.setAttribute('src', "https://uploads-ssl.webflow.com/5f372feaad458c72563e4cfa/5f3eec4f5624b799c780a96a_Salmon%20maki_web.jpg");
        menu3.appendChild(img3);

        let menu4 = createDiv();
        menu4.textContent = 'Temaki $5.00/plate';
        let img4 = document.createElement('img');
        img4.setAttribute('src', "https://www.wikihow.com/images/1/16/Make-Temaki-Sushi-Intro.jpg");
        menu4.appendChild(img4);

        let menu5 = createDiv();
        menu5.textContent = 'Chirashi $7.50/bowl';
        let img5 = document.createElement('img');
        img5.setAttribute('src', "https://media-cdn.tripadvisor.com/media/photo-s/12/b2/3f/a2/chirashi-sushi-tokyo.jpg");
        menu5.appendChild(img5);

        let menu6 = createDiv();
        menu6.textContent = 'Inari $3.00/plate';
        let img6 = document.createElement('img');
        img6.setAttribute('src', "https://airkitchen.me/picture/articles/16.png");
        menu6.appendChild(img6);


        outerDiv.append(menuDiv, menu1, menu2, menu3, menu4, menu5, menu6);
        return outerDiv;
    }

    const extraMenu = () => {
        let outerDiv = createDiv();
        outerDiv.classList.add('extra');

        let menuDiv = createDiv();
        let boldText = document.createElement('B');
        boldText.textContent = 'Extras';
        menuDiv.appendChild(boldText);

        let extra1 = createDiv();
        extra1.textContent = 'Edamame $3.00/plate';
        let img1 = document.createElement('img');
        img1.setAttribute('src', "https://post.psychcentral.com/wp-content/uploads/sites/3/2020/02/280285_2200-1200x628.jpg");
        extra1.appendChild(img1);

        let extra2 = createDiv();
        extra2.textContent = 'Miso Soup $3.00/cup';
        let img2 = document.createElement('img');
        img2.setAttribute('src', "https://s3.amazonaws.com/jconline/jc_misosoup_general_860-560.jpg");
        extra2.appendChild(img2);

        let extra3 = createDiv();
        extra3.textContent = 'Red Bean Ice Cream $5.00/ea';
        let img3 = document.createElement('img');
        img3.setAttribute('src', "https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-7e8ca0b/wp-content/uploads/2020/12/Red-Bean-Ice-Cream-1224-I.jpg");
        extra3.appendChild(img3);

        outerDiv.append(menuDiv, extra1, extra2, extra3);
        return outerDiv;
    }

    const createMenu = () => {
        let arr = new Array(omakaseMenu(), sushiMenu(), extraMenu());
        return arr;
    };

    return { createMenu }
})();

export default menu


/* <h1>Menu</h1>
<div> 
  <b>Full course</b>
  <div>Omakase $100, 15 course</div>
</div> 
<div class="grid">
  <div id='menusushi'><b>Sushi Menu</b></div>
  <div>Nigiri $3.50/plate</div>
  <div>Sashimi $3.00/plate</div>
  <div>Makimono $2.50/plate</div>
  <div>Temaki $5.00/plate</div>
  <div>Chirashi $7.50/plate</div>
  <div>Inari $3.00/plate</div>
</div>
<div>
  <b>Extras</b>
  <div>Edamame $3.00/plate</div>
  <div>Miso Soup $3.00/bowl</div>
  <div>Red Bean Ice Cream $5.00</div>
</div> */