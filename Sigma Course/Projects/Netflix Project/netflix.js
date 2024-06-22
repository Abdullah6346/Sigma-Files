

var buttons = document.querySelectorAll('.hidebutton');
var contents = document.querySelectorAll('.hidecontentbox');
var box5 = document.querySelector('.box5')
var x = window.matchMedia("(max-width: 500px)")




var boxContents = [
    "<span class='hidden'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.,<br><br>You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</span>",

    "<span class='hidden'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 1,100 to Rs 250 a month. No extra costs, no contracts.</span>",

    "<span class='hidden'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br> You can also download your favorite shows with the iOS, Android, or Windows 10 app.Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>",

    "<span class='hidden'>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>",
    "<span class='hidden'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span>",

    "<span class='hidden'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br><br>  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span>"
];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (index) {

        return function () {

            var content = contents[index];
            if (content.innerHTML.includes("Netflix ")) {
                content.classList.remove("showContent");
                content.classList.add("hideContent");
                if (x.matches) { // If media query matches
                    box5.style.height = '50pc'
                } else {
                    box5.style.height = '60pc'
                }
                

                setTimeout(function () {
                    content.style.display = "none";
                }, 500); // Adjust timing to match CSS animation duration
                // If content is present, remove it
                content.innerHTML = "";
            } else {
                box5.style.height = '75pc'
                
                if (x.matches) { // If media query matches
                   content.style.display = "flex";
                   content.style.padding = "1rem";
                   content.style.width = "84vw";
                  

                } else {
                    content.style.display = "flex";

                }

                content.classList.remove("hideContent");
                content.classList.add("showContent");
                // If content is not present, add it from the boxContents array
                content.innerHTML += boxContents[index];
            }
        };
    }(i));
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}

