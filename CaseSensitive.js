let stdin = process.openStdin()
stdin.addListener("data",(text) => {
    if((text.length%2) == 0){
      var half = (text.length-2)/2
      var check = 0
      for(let i=0 ; i<=half ; i++){
          if(text.toString().substring(half-(i+1),half-i) == text.toString().substring(half+i,half+(i+1)))
                check += 1
      }
      if(check == half){
        console.log("Yes")
      }
          
      else{
        console.log("No")
      }       
    }
    else{
      console.log("No")
    }   
    stdin.destroy()
})