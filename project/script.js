document.addEventListener("DOMContentLoaded", () => {
  const newsSwiper = new Swiper(".news-swiper", {
    loop: true,
    spaceBetween: 55,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const popup = document.getElementById("productPopup");
  const popupTitle = popup.querySelector(".popup__title");
  const popupDescription = popup.querySelector(".popup__description");

  document.querySelectorAll(".card__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const card = link.closest(".card");
      if (!card) return;

      const title = card.querySelector(".card__title")?.textContent || "";

      popupTitle.textContent = title;
      popupDescription.textContent = `Подробное описание продукции ${title}. 
        Здесь будут технические характеристики и преимущества.`;

      popup.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  popup.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("popup__overlay") ||
      e.target.classList.contains("popup__close")
    ) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  });

  function closePopup() {
    popup.classList.remove("active");
    document.body.style.overflow = "";
  }
});
