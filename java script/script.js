// Get Slider Items | Array.form [ES6 Feature]
var SliderImages = Array.from(document.querySelectorAll(".slide-container img"));
var slideCounts = SliderImages.length;
// current slide
var currentSlide = 1;
// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');
//next and previous
var nextSlide = document.getElementById("next");
var prevSlide = document.getElementById("prev");

nextSlide.onclick = nextButton;
prevSlide.onclick = prevButton;
//create element ul
var paginationElement = document.createElement("ul")
//create attributes to element
paginationElement.setAttribute("id" , "pagination-ul")
// Create List Items Based On Slides Count
for(var i=1 ; i<=slideCounts ; i++)
{

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById("pagination-ul");

var pagonationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));
// Loop Through All Bullets Items
for(var i = 0 ; i<pagonationBullets.length ; i++)
{
    pagonationBullets[i].onclick = function()
    {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }

}
checker();
//Function Checker
// next Slide Function

function nextButton()
{
    if(nextSlide.classList.contains("disabled"))
    {
    // Do Nothing
    return false;
    }
    else
    {
        currentSlide++;
        checker();
    }
}
// Previous Slide Function
function prevButton()
{
    if(prevSlide.classList.contains("disabled"))
    {
    // Do Nothing
    return false;
    }
    else
    {
        currentSlide--;
        checker();
    }
}
function checker()
{
    //set the slider number
    slideNumberElement.textContent = "Slide #" + (currentSlide) + " of " + (slideCounts);
    //set Active on image
    removeAllActive();

    SliderImages[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1 ].classList.add("active");
    // removeAllActive();

    //check if the current slide is the first
    if(currentSlide == 1)
    {
    // Add Disabled Class on Previous Button
    prevSlide.classList.add('disabled');

    } else {

    // Remove Disabled Class From Previous Button
    prevSlide.classList.remove('disabled');

    }
    //check if the current slide is the lasr one
    if(currentSlide == slideCounts)
    {
    // Add Disabled Class on next Button
    nextSlide.classList.add('disabled');

    } else {

    // Remove Disabled Class From next Button
    nextSlide.classList.remove('disabled');

    }

}
function removeAllActive()
{
    //loop through images
    SliderImages.forEach(function(img)
    {
        img.classList.remove("active");
    });
    pagonationBullets.forEach(function(bullet)
    {
        bullet.classList.remove("active");
    });
}
