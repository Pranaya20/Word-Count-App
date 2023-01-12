const textbox = document.getElementById('text-box');
console.log("textData",textbox);

textbox.addEventListener('input',function(){
   let text = this.value;
   const textlength = text.length;
   document.getElementById("char").innerHTML = textlength; 
   text = text.trim();
   wordCount = text.split(" ");
   let cleanList = wordCount.filter(function(element){
    return element != "";
   })
   document.getElementById("word").innerHTML = cleanList.length; 

   let line = text.split('.');
   document.getElementById("sentence").innerHTML = line.length; 
   let para = text.split(/\n/);
   document.getElementById("paragraph").innerHTML = para.length;   
});

