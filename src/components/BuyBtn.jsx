import React, { useState } from "react";
import TicketButton from "../assets/ticketbutton1.png";
import { motion } from "framer-motion";
import Modal from "../modals/Modal1"; 
import Modal2 from "../modals/Modal2"; 

const BuyBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [showModal2, setShowModal2] = useState(false); 
  const [ticketCount, setTicketCount] = useState(""); // Ticket count state lifted here
  const cakePerTicket = 3.03;

  // Calculate the total cost based on ticket count
  const totalCost = (ticketCount * cakePerTicket).toFixed(2);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const switchToModal2 = () => {
    setIsModalOpen(false); 
    setShowModal2(true); 
  };

  return (
    <div>
      {/* Background Content */}
      <div className={`relative ticket-main ${isModalOpen ? "blur-sm" : ""}`}>
        <img className="h-16 mx-auto" src={TicketButton} alt="Lottery Ticket" />
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#492C81] to-[#7343D2] hover:from-[#492C81]/80 hover:to-[#7343D2]/80 text-xs font-bold h-10 w-44 rounded-full mx-auto my-auto"
          onClick={toggleModal} >
          Buy Tickets
        </motion.button>
      </div>

      {/* Modal1 Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <Modal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            switchToModal2={switchToModal2}
            ticketCount={ticketCount}
            setTicketCount={setTicketCount}
            totalCost={totalCost} // Pass total cost
          />
        </div>
      )}

      {/* Modal2 Component */}
      {showModal2 && (
        <div className="fixed inset-0 z-50">
          <Modal2
            isOpen={showModal2}
            toggleModal={() => setShowModal2(false)} // Close Modal2
            totalCost={totalCost} // Pass total cost to Modal2
          />
        </div>
      )}
    </div>
  );
};

export default BuyBtn;
