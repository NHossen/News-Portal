const handlecategory=async ()=>{
  console.log("hello dear");
    const res=await fetch(`https://openapi.programming-hero.com/api/news/categories`
    );
    const data=await res.json();
    console.log("111",data.data.news_category[1]);


    const tabContainer=document.getElementById('tab-container');//Inside this div put all data

    //const trimeData=data.data.news_category.slice(0,3);
    const getData=data.data.news_category.slice(0,3);
    getData.forEach((category) => {
      console.log("Search category name",category)
        const div =document.createElement("div");
        div.innerHTML=`
        
        <a onclick="hadleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        
        `;
        tabContainer.appendChild(div);

        console.log("categort data id",category.category_id)

    });

}//Done





const hadleLoadNews=async(categoryId) =>{

  console.log("CAtergory main idd",categoryId);
  
    const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);

    const data=await res.json();
    console.log("55",data);

    const cardContainer=document.getElementById("card-container");
    cardContainer.innerHTML="";


    data.data.forEach((news)=>{
        const div=document.createElement("div");
        div.innerHTML=`
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${news?.image_url}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">
                    ${news.title.slice(0,30)}
                    <div class="badge badge-secondary">${news.rating.badge}</div>
                  </h2>
                  <p>${news.details.slice(0,80)}</p>
                  <h2>${news.total_view ? news.total_view:"3000"}</h2>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div> 
                    <div class="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
        
        `;

        cardContainer.appendChild(div);

    });

}

handlecategory();
hadleLoadNews('08');