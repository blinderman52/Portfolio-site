const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //When clicking the burger, toggle dropdown and animate the links
  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.25
        }s`;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });

  //Reset the dropdown and burger if a link in the dropdown is tapped
  nav.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link) => {
      link.style.animation = "";
    });

    burger.classList.toggle("toggle");
  });
};

const downloadFile = () => {
  const downloadBTN =  document.getElementById('downloadButton')

  downloadBTN.addEventListener("click", () => {
    let downloadLink = document.createElement('a');
    downloadLink.href = 'Assets/resume.pdf';
    downloadLink.download = 'BrodeyLindermanResume.pdf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });

}


/////////////////////////Function calls
 navSlide();
 downloadFile();
