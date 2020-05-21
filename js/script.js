$("button").click(function(){
    let query = $("input").val();
    fetch("https://sentim-api.herokuapp.com/api/v1/",{
	method: 'POST',
	headers: {
        "Accept": "application/json", 
        "Content-Type": "application/json"
},
	body: JSON.stringify({
		"text": query
})

    .then(function(response) {
  		return response.json();
      })
    .then(function(data){
        console.log(data);

    });
});