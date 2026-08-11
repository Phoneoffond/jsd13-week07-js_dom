window.onload = function () {
  let img = document.getElementById("boy");
  let babyboo = new Image("https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37px23k-sticker3.webp");
  let count = document.getElementById("score");
  let score = localStorage.getItem("counter") || 0;
  let j = 100;
  let imageIndex = 0;
  var butterboy = new Image("https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37ag6n2-sticker19.webp");
  let d = 50;
  
  const actions = Array.from(document.querySelectorAll("[data-action]"));
  document.querySelector(".counter-value").innerHTML = score;
  actions.forEach((action) => {
    action.addEventListener("click", () => {
      const action_name = action.dataset.action;
      switch (action_name) {
        case "increase":
          localStorage.setItem("counter", score);
      }
    });
    action.addEventListener("keyup", () => {
      const action_name = action.dataset.action;
      switch (action_name) {
        case "increase":
          localStorage.setItem("counter", score);
      }
    });
  });

  var popup = function () {
    switch (imageIndex) {
      case 0:
       
        document.getElementById("score").style.transform = "rotate(10deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
      case 1:
       
        document.getElementById("score").style.transform = "rotate(20deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
      case 2:
       
        document.getElementById("score").style.transform = "rotate(-10deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
      case 3:
      
        document.getElementById("score").style.transform = "rotate(-20deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
    }
 
    setTimeout(function () {
      var tscore2 = function () {
        document.getElementById("score").style.transform = "rotate(0deg)";
        document.getElementById("score").style.fontSize = "4rem";
        document.getElementById("score").style.transition =
          "fontSize 0.2s, 0.2s";
        if (score >= 10) {
          document.getElementById("score").style.fontSize = "2rem";
        }
      };
      tscore2();
    }, 80);
  };

  document.addEventListener("pointerdown", function () {
    img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37ag6n2-sticker19.webp";
    increaseScore();
  });

  document.addEventListener("pointerup", function () {
    img.src = ".https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37ubqo9-sticker25.webp";
  });
  document.addEventListener("touchstart", function () {
    img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-378ch24-sticker16.webp";
  });
  document.addEventListener("touchend", function () {
    img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37h74jy-sticker17.webp";
  });
  document.addEventListener("keydown", function () {
    img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37r82mk-sticker15.webp";
    increaseScore();
  });
  document.addEventListener("keyup", function () {
    img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37gd6p2-sticker5.webp";
  });
  function increaseScore() {
    popup();
    score++;
    count.innerHTML = score;

    if (score == 50) {
      document.getElementById("h2").innerHTML = "Good Job!";
    }
    if (score == 100) {
      document.getElementById("h2").innerHTML = "Well done!";
    }
    if (score == 150) {
       document.getElementById("h2").innerHTML = "You can do it!";
    }
    if (score == 200) {
      document.getElementById("h2").innerHTML = "Super Cool!";
      document.body.style.backgroundImage =
        'url("https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/Soothing-nature-backgrounds-2.webp")';
      document.body.style.transition = "3s";
      document.addEventListener("touchstart", function () {
        img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37iabqe-sticker9.webp";
      });

      document.addEventListener("touchmove", function () {
        img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-372xvzr-sticker7.webp";
      });

      document.addEventListener("mousedown", function () {
        img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37h74jy-sticker17.webp";
      });

      document.addEventListener("mouseup", function () {
        img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37ltv91-sticker27.webp";
      });

      document.addEventListener("keydown", function () {
        img.src = ".https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37px23k-sticker3.webp";
      });

      document.addEventListener("keyup", function () {
        img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37bh405-sticker8.webp";
      });

      
      
      s.addEventListener("ended",function(){
        s.currentTime = 0;
        document.body.style.backgroundImage =
        "url('hhttps://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/How-to-Use-Landscape-Photography-in-Creative-Campaigns-2.webp')";
        document.getElementById("h1").className = "";
      })
    }
 

    if (score == d) {
      a = prompt("What's your number?");
      if (a == j) {
        document.addEventListener("touchstart", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37a4irp-sticker12.webp";
        });

        document.addEventListener("touchmove", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37cxo0g-sticker14.webp";
        });

        document.addEventListener("mousedown", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37tdi8k-sticker13.webp";
        });

        document.addEventListener("mouseup", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37ry9t6-sticker26.webp";
        });

        document.addEventListener("keydown", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37p6nu2-sticker18.webp";
        });

        document.addEventListener("keyup", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-372iftb-sticker20.webp";
        });

      }
      butterboy.addEventListener("ended", function () {
      butterboy.currentTime = 0;
        img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-372l0os-sticker10.webp";

        document.addEventListener("touchstart", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-378vox1-sticker24.webp";
        });

        document.addEventListener("touchmove", function () {
          img.src = ".https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37wxpmz-sticker28.webp";
        });

        document.addEventListener("mousedown", function () {
          img.src = ".https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37h74jy-sticker17.webp";
        });

        document.addEventListener("mouseup", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-372xvzr-sticker7.webp";
        });

        document.addEventListener("keydown", function () {
          img.src = ".https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-37gd6p2-sticker5.webp";
        });

        document.addEventListener("keyup", function () {
          img.src = "https://pub-e6e58aeeeb9c474fb0d35a5f6f05b8ca.r2.dev/uploads/main/15-04-2023-20-18-374op0u-sticker2.webp";
        });
  
      
        document.body.style.backgroundImage =
          "url('https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/How-to-Use-Landscape-Photography-in-Creative-Campaigns-1.webp')";
      });
      
    }
  }
};


document.body.addEventListener('touchstart', function(e) {
  e.preventDefault();
});
document.body.addEventListener('touchmove', function(e) {
  e.preventDefault();
});
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event) {
   window.scrollTo(0, 0);
   event.preventDefault();
   event.stopPropagation();
}