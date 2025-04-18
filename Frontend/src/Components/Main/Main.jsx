import React, { useEffect } from "react";
import "../Main/main.scss";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img(1).jpg";
import img2 from "../../Assets/img(2).jpg";
import img3 from "../../Assets/img(3).jpg";
import img4 from "../../Assets/img(4).jpg";
import img5 from "../../Assets/img(5).jpg";
import img6 from "../../Assets/img(6).jpg";
import img7 from "../../Assets/img(7).jpg";
import img8 from "../../Assets/img(8).jpg";
import img9 from "../../Assets/img(9).jpg";
import img10 from "../../Assets/img(10).jpg";
import img11 from "../../Assets/img(11).jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import "../../App.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imageSrc: img,
    destTitle: "Bora Bora",
    Location: "French Polynesia",
    grade: "CULTURAL RELAX",
    price: "$1,000",
    description:
      "🌴 Bora Bora is a breathtaking island located in the South Pacific, known for its turquoise lagoon, overwater bungalows, and luxurious resorts. Surrounded by a barrier reef and dominated by the stunning Mount Otemanu, this tropical paradise is ideal for honeymooners, beach lovers, and those seeking relaxation in a dreamy setting. Snorkeling, scuba diving, and sunset cruises make Bora Bora a top bucket-list destination."
  },
  {
    id: 2,
    imageSrc: img1,
    destTitle: "Queenstown",
    Location: "New Zealand",
    grade: "ADVENTURE NATURE",
    price: "$900",
    description:
      "🏔️ Queenstown is New Zealand’s adventure capital, offering a thrilling blend of bungee jumping, skydiving, jet boating, and scenic hikes. Nestled beside Lake Wakatipu and surrounded by the Southern Alps, it’s a picturesque town that invites exploration year-round."
  },
  {
    id: 3,
    imageSrc: img2,
    destTitle: "Santorini",
    Location: "Greece",
    grade: "ROMANTIC ESCAPE",
    price: "$850",
    description:
      "🌅 Santorini is famous for its whitewashed buildings, blue-domed churches, and dramatic sunsets. Perched above the Aegean Sea, this Greek island offers volcanic beaches, rich history, and a perfect setting for romantic getaways."
  },
  {
    id: 4,
    imageSrc: img3,
    destTitle: "Kyoto",
    Location: "Japan",
    grade: "CULTURAL HERITAGE",
    price: "$950",
    description:
      "🌸 Kyoto is Japan’s cultural heart, known for its ancient temples, tea houses, and seasonal cherry blossoms. It’s a place where traditional geisha culture meets serene Zen gardens and centuries-old shrines."
  },
  {
    id: 5,
    imageSrc: img4,
    destTitle: "Banff",
    Location: "Canada",
    grade: "NATURE RETREAT",
    price: "$780",
    description:
      "🏞️ Banff National Park in the Canadian Rockies is a haven for outdoor lovers. With turquoise lakes, glacier views, and mountain hikes, it's perfect for those who seek serenity and adventure in untouched nature."
  },
  {
    id: 6,
    imageSrc: img5,
    destTitle: "Marrakech",
    Location: "Morocco",
    grade: "HISTORICAL MYSTERY",
    price: "$670",
    description:
      "🕌 Marrakech is a vibrant city full of life, color, and culture. From bustling souks and ancient palaces to aromatic street food and hidden riads, this Moroccan gem offers an unforgettable sensory experience."
  },
  {
    id: 7,
    imageSrc: img6,
    destTitle: "Reykjavík",
    Location: "Iceland",
    grade: "ARCTIC ADVENTURE",
    price: "$980",
    description:
      "❄️ Reykjavík is the gateway to Iceland’s natural wonders—from geysers and glaciers to the magical Northern Lights. The city itself offers cozy cafés, vibrant art scenes, and geothermal spas like the famous Blue Lagoon."
  },
  {
    id: 8,
    imageSrc: img7,
    destTitle: "Rome",
    Location: "Italy",
    grade: "ANCIENT HISTORY",
    price: "$750",
    description:
      "🏛️ Rome is an open-air museum of Western civilization. Walk through the Colosseum, explore the Roman Forum, toss a coin into the Trevi Fountain, and indulge in authentic Italian cuisine while embracing la dolce vita."
  },
  {
    id: 9,
    imageSrc: img8,
    destTitle: "Cape Town",
    Location: "South Africa",
    grade: "NATURE & CULTURE",
    price: "$890",
    description:
      "🌍 Cape Town offers a rare blend of urban life and stunning nature. Visit Table Mountain, explore the vibrant V&A Waterfront, and take a scenic drive to the Cape of Good Hope. Wildlife and winelands are just a drive away."
  },
  {
    id: 10,
    imageSrc: img9,
    destTitle: "Bali",
    Location: "Indonesia",
    grade: "SPIRITUAL WELLNESS",
    price: "$700",
    description:
      "🌺 Bali is a spiritual and wellness haven with lush rice terraces, ancient temples, and beachside retreats. Whether surfing in Uluwatu or meditating in Ubud, Bali’s charm lies in its harmony with nature and culture."
  },
  {
    id: 11,
    imageSrc: img10,
    destTitle: "Turkey",
    Location: "Turkey",
    grade: "ADVENTURE NATURE",
    price: "$900",
    description:
      "🏔️ Turkey is New Zealand’s adventure capital, offering a thrilling blend of bungee jumping, skydiving, jet boating, and scenic hikes. Nestled beside Lake Wakatipu and surrounded by the Southern Alps, it’s a picturesque town that invites exploration year-round."
  },
  {
    id: 12,
    imageSrc: img11,
    destTitle: "China",
    Location: "China",
    grade: "ANCIENT HISTORY",
    price: "$750",
    description:
      "🏛️ China is an open-air museum of Western civilization. Walk through the Colosseum, explore the Roman Forum, toss a coin into the Trevi Fountain, and indulge in authentic Italian cuisine while embracing la dolce vita."
  }
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle" data-aos="fade-up" data-aos-duration="2000">
        <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent">
        {Data.map(
          ({
            id,
            imageSrc,
            destTitle,
            Location,
            grade,
            price,
            description
          }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="destinationImage">
                  <img src={imageSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{Location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{price}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn">
                    DETAILS
                    <HiOutlineClipboardList className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
