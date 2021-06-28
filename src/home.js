const home = (() => {

    const createHome = () => {
        const h1 = document.createElement('h1');
        h1.textContent = 'Welcome to Samurai Sakura Sushi';

        const img = document.createElement('img');
        img.setAttribute('src', 'https://voyapon.com/wp-content/uploads/2016/02/s_sushi-1280x720.jpg');
        img.setAttribute('alt', 'sushiplatter');
        img.setAttribute('style', "width=1280 height=720");

        const paragraph = document.createElement('p');
        paragraph.textContent = 
        `The creators of Samurai Sakura burn with a desire to bring authentic sushi from Kyuushu, Japan to you;
         Their knowledge and passion for top quality seafood comes from years of working at some of the world's most prestigious sushi restaurants, including Sukiyabashi Jiro.`;

        let arr = new Array(h1, img, paragraph);
        
        return arr;
    };

    return { createHome }
})();

export default home;
/* <h1>Welcome to Samurai Sakura Sushi<h1>
<img src="https://voyapon.com/wp-content/uploads/2016/02/s_sushi-1280x720.jpg" alt="sushiplatter" width="1280" height="720">
<p>The creators of Samurai Sakura burn with a desire to bring authentic sushi from Kyuushu, Japan to you; The knowledge and passion for top quality seafood comes from years of working at some of the world's most prestigious sushi restaurants, including
  Sukiyabashi Jiro.</p>    */

