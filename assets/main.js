const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCKI6DNZu8-X5VWI0FEEYCTA&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById("Section-Content-API");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '340ba745b0mshb59e90d9c5b4446p1c4b05jsnc4a4d3caeb20',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}


(async () =>{
    try{
        const videos = await fetchData(API);
        
        let view = `
        ${videos.items.map((video) => `
        <div class="Group-API">
        <div class="Img-Content-API">
          <img class="Img" src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description }">
        </div>
      </div>
      <br>
      <br>
    <div class="Title-Content-API">
        <h3> 
        <span>  </span>

        </h3>
    </div>`
        ).slice(0, 4).join("")}`;

        content.innerHTML = view;
    }catch(error){
        // alert(`Error - End Point ${error}`)
        console.log(error);
    }

})();
