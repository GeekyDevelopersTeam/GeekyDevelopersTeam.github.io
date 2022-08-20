var Usrdata = document.querySelector(".box");

var projectDetails = [
  {
    projectId: "1",
    imgsrc: "assets/img/portfolio/paperticker-cover.png",
    projectName: "Paper Ticker",
    projectStack: "Flutter App",
    projectURL: "www.example.com",
    projectHeading1: "Project Description",
    projectDate: "20 May 2022",
    projectCategory: "Flutter Android+iOS App",
    projectClient: "Inhouse Project",
    projectImg1: "assets/img/portfolio/paperticker-1.png",
    projectImg2: "assets/img/portfolio/paperticker-2.png",
    projectImg3: "assets/img/portfolio/paperticker-3.png",
    projectDescription:
      "A Flutter Crypto wallet app where you can access data of all cryptocurrencies listed in the market. You can append or delete a coin in your wallet, which stores amount, date of purchase and even the exchange through which you purchased the coin. It's an all round app for crypto portfolio management.",
  },
  {
    projectId: "2",
    imgsrc: "assets/img/portfolio/grail-cover.png",
    projectName: "Grail",
    projectStack: "Flutter App",
    projectURL: "www.example.com",
    projectHeading1: "Project Description",
    projectDate: "1 Nov 2021",
    projectCategory: "Flutter Android+iOS App",
    projectClient: "Inhouse Project",
    projectImg1: "assets/img/portfolio/grail-1.png",
    projectImg2: "assets/img/portfolio/grail-2.png",
    projectImg3: "assets/img/portfolio/grail-3.png",
    projectDescription:
      "A simple Task Management App, where you can manage your daily tasks and also your long term goals (you get extra functionality here). We have also provided a feature of SWOT Analysis in the app. This app is backed by SQLite Local and Firebase Cloud Database.",
  },
  {
    projectId: "3",
    imgsrc: "assets/img/portfolio/technewz-cover.png",
    projectName: "TechNewz",
    projectStack: "Flutter App",
    projectURL: "www.example.com",
    projectHeading1: "Project Description",
    projectDate: "2 Sep 2021",
    projectCategory: "Flutter Android+iOS App",
    projectClient: "Client Project(Australia)",
    projectImg1: "assets/img/portfolio/technewz-1.png",
    projectImg2: "assets/img/portfolio/technewz-2.png",
    // projectImg3: "assets/img/portfolio/grail-3.png",
    projectDescription:
      "Client required a News App where all the latest tech news can be displayed using NewsAPI.org. Users can click on a News Tile and view the detailed news and can also be redirected to the original article.",
  },
 
];

console.log("Hello");

document.getElementById("portfolioElement").innerHTML = projectDetails
  .map(
    (project) =>
      `
    


  <div  class=" col-lg-4 col-md-6 portfolio-item filter-app">
  <div  class="portfolio-wrap">
    <img
      src="${project.imgsrc}"
      class="img-fluid"
      alt=""
    />
    <div class="portfolio-info">
      <h4>${project.projectName}</h4>
      <p>${project.projectStack}</p>
      <div class="portfolio-links">
        <!-- <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a> -->
        <a
          href="portfolio-details.html?projectId=${project.projectId}"
          title="More Details"
        >
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</div>



    
    `
  )
  .join("");
