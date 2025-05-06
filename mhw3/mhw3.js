function createImage(src) {
    
  const image = document.createElement('img');
  image.src = src;
  image.dataset.message = 'immagine creata'
  return image;
}
function riempi(num){
  
  const principale = document.querySelector('#main');
  let element;
  for(let i = 0; i<=num;i++){
     element = createImage(i%12);
      principale.appendChild(element);
     
  }

  console.log(principale.dataset.message);
}

function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

function onModalClick() {
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

// Main

const albumView = document.querySelector('#vista_album');
for (let i = 0; i < ALBUM.length; i++) {
  const photoSrc = ALBUM[i];
  const image = createImage(photoSrc);
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}

/*const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);*/


 //__________________________________________________________________
  function generate(event){
    event.preventDefault();
    const YOUR_ACCESS_KEY = '6LclXoC31wut3LfDYpniG34kIUFv6Z4OgC3bgC5V_x8';
 fetch('https://api.unsplash.com/photos/random', 
    {
        headers: {
          Authorization: `Client-ID `+YOUR_ACCESS_KEY
        }
      }
    )
 .then(onRes)
 .then(onJson);
}

function onRes(res){
    return res.json();
}

function onJson(json){
    console.log(json);
    const div = document.querySelector('#main2');
    div.innerHTML = '';
    const img = document.createElement('img');
    img.src = json.urls.small;
    div.appendChild(img);
}
document.querySelector('form').addEventListener('submit', generate);
//__________________________________________________________________
//__________________________________________________________________

function article(){

    const apitoken = '9vJboqdtrFLOTFVNOckwtr584EhCscULmLvB6Ds'
    fetch('https://api.thenewsapi.com/v1/news/all?api_token='+apitoken+'R&language=en&limit=3')
    .then(onRes)
    .then(onJsonNews);

}

function onJsonNews(json){
    console.log(json.data);
    const div =  document.querySelector('#main3');
    div.innerHTML = '';
    for(let item of json.data){
        const post = document.createElement('div');
        const titolo = document.createElement('h4');
        const par = document.createElement('p');
        const img = document.createElement('img');
        titolo.append('['+item.categories+'] '+item.title+':');
        par.append(item.description);
        post.appendChild(titolo);
        post.appendChild(par);
        img.src = item.image_url;
        post.appendChild(img);
        div.appendChild(post);
    }
    
}

article();
  