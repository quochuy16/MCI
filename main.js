var page1 = document.getElementById('page-1')
var page2 = document.getElementById('page-2')
var page3 = document.getElementById('page-3')
var page4 = document.getElementById('page-4')
var page5 = document.getElementById('page-5')  

page3.style.fill = "#F1692F" 
 
var checkPage = [page1,page2,page3,page4,page5]
console.log(checkPage)

var pageActive=page3
function activePage(page){
    pageActive =  document.getElementById(page)
    for(var index of checkPage){
        if(index === pageActive){
            pageActive.style.fill = "#F1692F"
        }else{
            index.style.fill = "#D9D9D9"
        }
    }
}
function prePage(){
    for(var index in checkPage){
        if(checkPage[index] === pageActive){
            console.log(index)
            if(index>0){
                checkPage[index-1].style.fill = "#F1692F"
                checkPage[index].style.fill = "#D9D9D9"
                pageActive = checkPage[index-1]
                break;
            }
        }
    }
}
function nextPage(){
    for(var index in checkPage){
        if(checkPage[index] === pageActive){
            console.log('trang hien tai la',index)
            if(index<checkPage.length){
                var indexNext = parseInt(index)+1
                console.log('trang tiep theo ',indexNext)
                checkPage[indexNext].style.fill = "#F1692F"
                checkPage[index].style.fill = "#D9D9D9"
                pageActive = checkPage[indexNext]
                break;
            }
        }
    }
}



function menuRepon() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menuRepon col-lg-6") {
      x.className += " responsive";
    } else {
      x.className = "menuRepon col-lg-6";
    }
  }