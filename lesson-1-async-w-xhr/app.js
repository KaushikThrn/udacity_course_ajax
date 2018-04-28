(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    function addImage(){
    	$("#response-container").append("responses")
    }
    let searchedForText;
    var settings={
        url:`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}`,
        headers:{
            Authorization:'Client-ID 25a10cd1a8ad4e70a042baf298711fcf'
        }
    }
    $.ajax(settings).done(addImage);
    /*const unsplashRequest=new XMLHttpRequest();
    unsplashRequest.open('GET',`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=25a10cd1a8ad4e70a042baf298711fcf`);
    unsplashRequest.onload = addImage;
    unsplashRequest.send();
    const responseContainer = document.querySelector('#response-container');*/

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });
})();
