import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../Containers/Carousel/Carousel";
import TitleContent from "../TitleContent/TitleContent";
import Collapse from "../Containers/Collapse/Collapse";
import Tag from "../Tag/Tag";
import Rate from "../Rate/Rate";
import Host from "../Host/Host";
import accomodationsData from "../../data/logements.json";
import style from "../../sass/pages/Accomodation/accomodation.module.scss";
import { useNavigate } from "react-router-dom";

export default function Accomodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const listEquipments = selectedAccommodation
    ? selectedAccommodation.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))
    : [];

  const tagsList = selectedAccommodation
    ? selectedAccommodation.tags.map((tag, index) => (
        <Tag key={index} tagName={tag} />
      ))
    : [];

  useEffect(() => {
    const accommodation = accomodationsData.find(
      (accommodation) => accommodation.id === id
    );
    if (!accommodation) {
      navigate("/404");
      return;
    }
    setSelectedAccommodation(accommodation);
  }, [id, navigate]);

  return (
    <div>
      {selectedAccommodation && (
        <div key={selectedAccommodation.id}>
          <Carousel pictures={selectedAccommodation.pictures} />
          <div className={style.headContainer}>
            <div className={style.leftContainer}>
              <TitleContent
                title={selectedAccommodation.title}
                location={selectedAccommodation.location}
              />
              <div className={style.tagContainer}>
                {tagsList}
              </div>
            </div>
            <div className={style.rightContainer}>
              <Host
                hostName={selectedAccommodation.host.name}
                hostPicture={selectedAccommodation.host.picture}
              />
              <Rate rating={selectedAccommodation.rating} />
            </div>
          </div>
          <div className={style.collapseContainer}>
            <Collapse
              title={"Description"}
              text={selectedAccommodation.description}
            />
            <Collapse title={"Équipements"} text={<ul>{listEquipments}</ul>} />
          </div>
        </div>
      )}
    </div>
  );
}
