
let movieOuter=document.querySelector(".movie-grid")
let getMovielist=async (search)=>{
    //API ->Promise
    let apiUrl;
       if(search){
             apiUrl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
       }
       else{
            apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1`
       }
   
    let data=await fetch(apiUrl)

    let finalData=await data.json()
    // let res=finalData.results
    // console.log(finalData);
    let {results}=finalData
    let path='https://image.tmdb.org/t/p/w1280'

    let items=''
    results.forEach(
        (movieObj)=>{
           let {original_title,release_date,poster_path}=movieObj
            
           items+=`<div class="movie-card">
                    <div class="card-image">
                        <!-- Placeholder for visual purposes -->
                        <img src="${path+poster_path}" alt="Dune: Part Two">

                    </div>
                    <div class="card-content">
                        <h4 class="movie-title">${original_title}</h4>
                        <div class="card-meta">
                            <span class="date">${release_date}</span>
                            <span class="rating high">8.8</span>
                        </div>
                    </div>
                </div>`
        }
    )

    console.log(items);
    
    movieOuter.innerHTML=items

    console.log(results);

}   

getMovielist()


// let searchForm=document.querySelector(".search-form")

// searchForm.ad

let searchInput=document.querySelector("#search-input")


searchInput.addEventListener(
    "keyup",
    (e)=>{
        // console.log(searchInput.value);
       let searchValue=e.target.value
        
       getMovielist(searchValue)
        
    }
)
