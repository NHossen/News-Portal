const handlecategory=async ()=>{
    const resposnse=await fetch(`https://openapi.programming-hero.com/api/news/categories`
    );

    const data=await resposnse.json();

    console.log("111",data);
    const tabContainer=document.getElementById('tab-container');

    const trimeData=data.data.news_category.slice(0,3);

    trimeData.forEach((category) => {
        const div =document.createElement("div");
        div.innerHTML=`<a onclick="hadleLoadNews()" class="tab">${category.category_name}</a>
        
        `;
        tabContainer.appendChild(div);
    });
}


const hadleLoadNews=async(category_id) =>{
    const resposnse=await fetch(` https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data=await resposnse.json();
    console.log("55",data);

    const cardContainer=document.getElementById("card-container")
    data.data.forEach((news)=>{
        const div=document.createElement("div");
        div.innerHTML=`
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${news?.image_url}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">
                    ${news.title}
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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
hadleLoadNews();