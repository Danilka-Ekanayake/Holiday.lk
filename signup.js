    const toggle = document.querySelector(".theme-toggle");

    toggle.addEventListener("click", () => {

      document.body.classList.toggle("dark");

      const icon = toggle.querySelector("i");

      if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }

    });

    