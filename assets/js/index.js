// Update owner's age in the DOM
function getAge(){
  let s = new Date();
  return s.getFullYear() - 1984;
}

document.getElementById("owner-age").innerHTML = getAge();

// This flips the business cards images
$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});
