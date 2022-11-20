function items(){
var arr= [
    {pic:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
    {pic:"https://images.unsplash.com/photo-1608386390658-86cf60bcf61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1598495037740-2c360cf49e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjJTIwYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFwcGxlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1434494745656-1aea7daa8f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFwcGxlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1548960254-5139d80bd5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGFwcGxlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1621715225783-b361297d0e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxhcHBsZSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1624505211449-2867a652a772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHxhcHBsZSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY4fHxhcHBsZSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",},
    {pic:"https://images.unsplash.com/photo-1628635991627-88788e920200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjExfHxhcHBsZSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",},
];
var clutter= " ";
arr.forEach(function(items){
    clutter+=`<div id="it1">
    <div id="imgg">
    <img src="${items.pic}" alt="">
    </div>
    </div>`
    
});
document.querySelector("#items").innerHTML=clutter;
};
items();