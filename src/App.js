import React from "react";
import ImageWithEffect from "./components/ImageWithEffect";
import "./App.css"; // Make sure to import your CSS here
import { useEffect } from "react";
const images = [
  "me-2008.jpg",
  "me-2009.jpg",
  "me-pfp.jpg",
  "family-2015.jpg",
  "spiderman-2016.jpg",
  "me-jenya-2016.jpg",
  "jenya-2016.jpg",
  "me-2017.jpg",
  "me-2017-2.jpg",
  "me-2017-3.jpg",
  "mummy-jenya-2017.jpg",
  "jenya-pari-2017.jpg",
  "me-1029.jpg",
  "me-india-2019.jpg",
  "2020-me-birthday.jpg",
  "2020-trip.jpg",
  "2020-trip-2.jpg",
  "me-2020-avva.jpg",
  "me-2020.jpg",
  "nov-2020-indiain.jpg",
  "famiy-2021.jpg",
  "croatia-2022.jpg",
  "2023-baby.jpg",
  "mtr-2023.jpg",
];

const captions = [
  "Thank you for this amazing birthday party!",
  ":)",
  "Thank you for having me as your profile picture for 10+ years",
  "Nice family photo",
  "I don't know what I'm doing",
  "I think either me or jenya has lost a tooth here",
  "Nice photo with you and jenya",
  "I think this is my first time at corner house where Daddy ate so much ice cream",
  "2017",
  "Jenya arrived!",
  "Matching clothes",
  "Camping with jenya and pari",
  "😁😁",
  "India again",
  "Birthday!",
  "Nice picture at junction 32",
  "I just added this because jenyas making a funny face",
  "3 generations of women + me",
  "Another nice photo",
  "Same here",
  "Some nice river: around 2019-2020 time",
  "Croatia and the blue waters",
  "Nice moment with baby",
  "MTR!!",
];

const App = () => {
  useEffect(() => {
    const followCursor = (e) => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️"; // Using emoji heart
      heart.style.position = "absolute";
      heart.style.userSelect = "none";
      heart.style.pointerEvents = "none";
      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;
      heart.style.fontSize = "20px";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1000); // Hearts disappear after 1 second

      // Heart fade-out effect
      heart.style.transition = "all 1s ease";
      setTimeout(() => {
        heart.style.transform = "translateY(-20px)";
        heart.style.opacity = "0";
      }, 0);
    };

    window.addEventListener("mousemove", followCursor);

    return () => {
      window.removeEventListener("mousemove", followCursor);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = document.querySelector(".image-container");
      const greetingContainer = document.querySelector(".greeting-container");

      // When the greeting container is out of view, make the images visible
      if (window.scrollY > greetingContainer.offsetHeight) {
        imageContainer.classList.add("visible");
      } else {
        imageContainer.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="greeting-container">
        <h1>Happy Mother's Day Amma!</h1>
        <br />
        <p>
          Thanks so much for being our amma and being so good at it - I've put
          together some highlights from oir lives to celebrate you.
        </p>
        <p>
          Even though I may not show it to you fully at all times, I love you so
          much and you genuinely are the <b>best</b> mother I could get. I hope
          you know how lucky we are to be your kids and live with you every day.
        </p>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <ImageWithEffect
            key={image}
            src={image}
            alt={`Memory from ${image.split(".")[0]}`}
            caption={captions[index]} // Pass the caption
          />
        ))}
      </div>
    </div>
  );
};

export default App;
