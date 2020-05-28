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
    })
    .then(function(response) {
  		return response.json();
      })
    .then(function(data){
        console.log(data);
        let connotation = data.result.type;
        let query2;
        console.log(connotation);
        if(connotation=="positive"){
            query2="smiling";
        }
        else if(connotation="nagative"){
            query2="sad";
        }
        else if(connotation="neutral"){
            query2="astonished";
        }
        fetch(`https://emoji-api.com/emojis?search=${query2}&access_key=7fe24e5dcb2932dadf26d215df513da35ff8b9d6`)
            .then(function(response) {
  		        return response.json();
            })
            .then(function(con){
                console.log(con);
                $(".result").html(con[0].character);
            });
    });

    
    
});