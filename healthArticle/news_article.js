var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
    var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var content = document.createElement('p');
    content.textContent = article.content;

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(content);

    articlesDiv.appendChild(articleDiv);    
    });
};
    xhr.send();
