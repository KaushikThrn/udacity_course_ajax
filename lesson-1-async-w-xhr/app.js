(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    function addImage(){
    	debugger;
    }
    let searchedForText;
    const unsplashRequest=new XMLHttpRequest();
    unsplashRequest.open('GET',`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=25a10cd1a8ad4e70a042baf298711fcf`);
    unsplashRequest.onload = addImage;
    unsplashRequest.send();
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });
})();
