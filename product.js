if (localStorage.getItem('movies') == null) {
  const movie = [
    {
      pid :1,
     
      name: 'Spider-Man',
      img_src: 'https://i.ytimg.com/vi/Or2XvQohv2E/maxresdefault.jpg',
      rating: 5,
      type: 'action',
     
    },
    {
        pid :2,
       
        name: 'DeadPool',
        img_src: 'https://wegotthiscovered.com/wp-content/uploads/2020/11/deadpool-3-fan-poster-1.jpg',
        rating: 4.9,
        type: 'action',
       
      },
      {
        pid :3,
        name: 'Wrong turn',
        img_src: 'https://m.media-amazon.com/images/M/MV5BMGEzNGFlYjUtYjRhYy00ZWI5LWI0N2ItMGY3ZThhZTAwZjY2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        rating: 3,
        type: 'horror',
       
      },
      {
        pid :4.8,
        name: 'Matrix',
        img_src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Poster_-_The_Matrix_Reloaded.jpg/220px-Poster_-_The_Matrix_Reloaded.jpg',
        rating: 5,
        type: 'sci-fic',
       
      },
      {
        pid :5,
       
        name: 'Nobody',
        img_src: 'https://www.uphe.com/sites/default/files/styles/scale__319w_/public/2021/05/Nobody_PosterArt.jpg?itok=EcO57JSn',
        rating: 4,
        type: 'action',
       
      },
      {
        pid :6,
       
        name: 'Jumanji',
        img_src: 'https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg',
        rating: 4.2,
        type: 'comedy',
       
      },
      {
        pid :7,
       
        name: 'Lion King',
        img_src: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/5239/875239-v',
        rating: 4.4,
        type: 'animi',
       
      },
      {
        pid :8,
       
        name: 'Frozen',
        img_src: 'https://i.ytimg.com/vi/Or2XvQohv2E/maxresdefault.jpg',
        rating: 5,
        type: 'animi',
       
      },
      {
        pid :1,
       
        name: 'Avatar',
        img_src: 'https://i.pinimg.com/originals/b0/52/73/b0527359e16d63b049ed67120abdf672.jpg',
        rating: 4.6,
        type: 'sci-fic',
       
      },
  ];
  localStorage.setItem('movies', JSON.stringify(movie))
}

var list = JSON.parse(localStorage.getItem('movies'))
// console.log(list);
list.forEach(function(product) {
  var products= document.getElementById('products')

    var div = document.createElement('div')
    div.setAttribute('class', 'item')

    var div2 = document.createElement('div');
    div2.setAttribute('class', 'picture');

    var img = document.createElement('img')
    img.src=product.img_src;

    div2.append(img);

    var div3= document.createElement('div');
    div3.setAttribute('class', 'rating');

    var p1= document.createElement('p')
    p1.textContent=product.name;

    var br= document.createElement('br');
    var p2= document.createElement('p')
    p2.textContent=product.rating;

    div3.append(p1,br,p2);

    div.append(div2,div3);

     products.append(div)
     console.log(products)
    

})
