console.log('this is my news website');
 let newsacoordian = document.getElementById('newsaccordian');
  let source = 'bbc- news'
 let apikey = 'd0623a545ad24f0f9da0940e814aa8e1'
 const xhr= new XMLHttpRequest();
 xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`, true)
 xhr.onload= function(){
    if(this.status===200){
        console.log('this'.responseText);
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        console.log(articles)
        console.log(json)
        let newshtml = "";
        articles.forEach(element => {
            
        
        for (news in articles){
            // console.log(articles[news])
            let news  = ` <div class="accordion" id="newsaccordian">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 ${element['author']}-- ${element['publishedAt'
                 ]}
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>${element['title']} <a href="${element['url']}"  target='_blank'>Read more here </a></strong> 
                
                </div>
              </div>
            </div>
           
           
           </div>`
           newshtml+= news;
      
        }
    });
       newsacoordian.innerHTML = newshtml
    }
    else{
        console.log('some error occured')
    }
 }
 xhr.send();
