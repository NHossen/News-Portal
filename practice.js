//console.log("this is naeem")

const handelTabSection=async()=>{
    const res=await fetch(" https://openapi.programming-hero.com/api/news/categories");
    //console.log("res console",res);
    const data =await res.json();
    //console.log("data Loaded",data);

    const newsContainer=document.getElementById('tab-Container')

    const getDataName=data.data.news_category;
     console.log(getDataName)

    getDataName.forEach((dataId)=>{
        console.log("gategpryNAme",dataId)
        const setPostName=document.createElement("div");
        setPostName.innerHTML=`

        <a onclick="clickNewsData('${dataId.category_id}')" class="tab">${dataId.category_name}</a> 

        `;
       newsContainer.appendChild(setPostName)
        console.log("data id ",dataId.category_id)
    })

 
}

const clickNewsData=async (id)=>{
    console.log("CAtergory main idd",id);

const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
const dataId=await res.json();

console.log("myDara",dataId);

const newsContainer=document.getElementById("news-container");

newsContainer.innerHTML="";
// Data sort
dataId.data.sort((a, b) => b.total_view - a.total_view);

dataId.data.forEach((news) =>{
const newDiv=document.createElement('div');
newDiv.innerHTML=`
<div class="hero bg-[#f5f5f5] my-6 p-6">
<div class="hero-content flex-col lg:flex-row">
  <img src="${news?.image_url}" class="lg:max-w-sm rounded-lg shadow-2xl" />
  <div>
    <h1 class="text-2xl font-bold">${news.title}</h1>
    <p class="py-6">${news.details.slice(0,300)}</p>

    <div class="flex lg:flex-row flex-col justify-between items-center">
        <!-- Author Details -->
      <div class="flex gap-2">
        <img class="w-10 rounded-full" src="${news?.author?.img}" alt="">
        <div>
            <h1>${news?.author?.name}</h1>
            <p>${news?.author?.published_date}</p>
        </div>
      </div>  
        <!-- View -->
      <div>
        <p class="flex gap-2"><img src="view.svg" alt="">${news.total_view ? news.total_view:"No Views"}</p>
      </div>  
        <!-- Rating -->
      <div>
        <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          </div>
      </div>  
        <!-- More Details -->
      <div>
        <img src="arrow.svg" alt="">
      </div>  
    </div>
    
  </div>
</div>
</div>

`;

newsContainer.appendChild(newDiv);

//console.log(news);


});




}
clickNewsData("03")

handelTabSection()