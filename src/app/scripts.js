exports.callScripts=function() {
  document.querySelector('#nob').addEventListener("click", (e) => {
    const elem = document.querySelector(".card");
    const clone = elem.cloneNode(true);
    document.body.appendChild(clone);
  });
  
  
  document.querySelector('#background-color').addEventListener('click', function (event){
    const elem = document.querySelector(".card");
    const backgroundColor = elem.style.backgroundColor;
  
    if (backgroundColor === 'beige') {
      elem.style.backgroundColor = 'green';
    } else {
      elem.style.backgroundColor = 'beige';
    }
  });
  
  document.querySelector('#change-heading').addEventListener('click', function onClick(event){
    const elem = document.querySelector(".card h2");
    if (elem.innerHTML === "Christian Wasta"){
      elem.innerHTML = "Something Else";
    } else {
      elem.innerHTML = "Christian Wasta";
    }
  });
  
  document.querySelector("#delete-last-card").addEventListener("click", function () {
      const elem = document.querySelectorAll(".card");
      if(elem.length > 1) {
        elem[elem.length - 1].remove();
      }
  });
  
  document.querySelector('#details').addEventListener('click', function (event){
    const elem = document.querySelector(".card p");
    const display = elem.style.display;
    
    if (display === 'none') {
          elem.style.display = 'block';
      } else {
          elem.style.display = 'none';
      }
  });
  
}