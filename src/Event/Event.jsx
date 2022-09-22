import React from "react";
import event from "../Event/Event.css";
import cake from "../../src/images/cake.png";
import { GoCalendar } from "react-icons/go";
import { TbMapPin } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Event = () => {
  return (
    <div className="event">
      <div className="cake-img">
        <img src={cake} alt="pic" />
      </div>
      <div className="main-cards">
        <div className="birthday-cards">
          <span>Birthday Bash</span>
          <p>Hosted By Elysia</p>

          <div className="cards">
            <div className="cards-icons">
              <GoCalendar className="icon" />
            </div>
            <p className="text-date">
              <span className="first-date">18 August 6:00PM</span>
              <span className="subheading">to 19 August 1:00PM UTC +10</span>
            </p>
            <div className="arrow">
              <MdOutlineKeyboardArrowRight className="arrow-right" />
            </div>
          </div>

          <div className="cards">
            <div className="cards-icons">
              <TbMapPin className="icon" />
            </div>
            <p className="text-date">
              <span className="first-date">Street name</span>
              <span className="subheading">Suburb, State, Postcode</span>
            </p>
            <div className="arrow">
              <MdOutlineKeyboardArrowRight className="arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
