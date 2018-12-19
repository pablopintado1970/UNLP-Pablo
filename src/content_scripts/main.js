//document.querySelector("body").style["background-color"] = "green";//

document.querySelectorAll("div, p").forEach(elem =>{
   elem.addEventListener("dblclick", evt => {
     elem.style["background-color"] = "yellow";
     var doc = nlp(elem.textContent);
     var palabras= doc.topics().out('frequency');
         console.log(palabras);
     var palabrasAdaptadas = [];

     palabras.forEach(palabra => {
              palabrasAdaptadas.push({"text": palabra.normal, "weight":palabra.percent});
     })

     var container = document.createElement("div");
         container.style.height = "500px";
         container.style.width = "500px";
         container.onclick = function(){
                this.remove();
         }
         container.style.position = "fixed";
         container.style.top = "0px";
         container.style.left = "0px";
         container.style.background = "orange";"

         document.body.appendChild(container);

         $(container).jqCloud(palabrasAdaptadas);

     evt.stopImmediatePropagation();
   })
});