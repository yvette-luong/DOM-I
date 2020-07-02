const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//a tag array
const newArray = Array.from(document.getElementsByTagName('a'));
// console.log(navArray)

const navValues = siteContent.nav

for (let i = 0; i< newArray.length; i++){
  newArray[i].textContent = Object.values(navValues)[i];
}

const headerImg = document.getElementById('cta-img');
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

const headerText = document.getElementsByTagName('h1');//HTML Collection
headerText[0].innerHTML = '<h1>DOM<br>Is<br>Awsome</h1>';

const buttonText = document.getElementsByTagName('button');
buttonText[0].textContent  = siteContent.cta.button;

const mainImage = document.querySelector('#cta-img');

const testItOut = document.getElementsByClassName('text-content'); 

const subtitles = document.getElementsByTagName('h4');
subtitles[0].textContent = siteContent["main-content"]["features-h4"]
subtitles[1].textContent = siteContent["main-content"]["about-h4"]
subtitles[2].textContent = siteContent["main-content"]["services-h4"]
subtitles[3].textContent = siteContent["main-content"]["product-h4"]
subtitles[4].textContent = siteContent["main-content"]["vision-h4"]

const paragraphs = document.querySelectorAll('.main-content p'); 
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]

const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute("src",siteContent["main-content"]["middle-img-src"]);

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"]


const contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs[0].textContent = siteContent.contact.address
contactParagraphs[1].textContent = siteContent.contact.phone
contactParagraphs[2].textContent = siteContent.contact.email

const footerParagraph = document.querySelector('footer p')
footerParagraph.textContent = siteContent.footer.copyright;

// const navBar = document.querySelectorAll('nav a');
// navBar.style.color = 'green';

// a.style.color = 'red';

const newNav1 = document.createElement('a')
newNav1.textContent = 'More Idea' ;

const newNav2 = document.createElement('a');
newNav2.textContent = 'More Idea' ;

const navTarget = document.querySelector('nav');
navTarget.appendChild(newNav1);
navTarget.appendChild(newNav2); 

for(let i=0 ; i<navTarget.children.length; i++){
  navTarget.children[i].style.color="green";
}
