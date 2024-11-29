import { Link } from "react-router-dom"
import "./AboutCard.css"
import LogRegSection from "../../Shared/LogRegSection/LogRegSection"
import AuthContext from "../../../contexts/authContext";
import { useContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../../../slices/cartSlice';
import Modal from "../../Shared/Modals/Modal/Modal";

export default function AboutCard({
  id,
  image,
  name,
  title,
  description,
  price,
  text

}) {
  const { isAuthenticated, isAdmin, username } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [service, setService] = useState(null);
  const handleAddToCart = () => {
    // Добавяме продукта в количката
    dispatch(
      addItem({
        id,
        name,
        price,
        image,
        quantity: 1,
      })
    );

    // Настройваме данни за съобщението в модала
    setService({
      title: `${product.name} Added to Cart`,
      description: `You have successfully added ${name} to your cart.`,
      more: `Price: $${price}`,
    });

    setIsModalOpen(true); // Отваряме модала

    // След 3 секунди автоматично затваряме модала
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000); // Таймер за затваряне на модала след 3 секунди
  };
    return (
        <>

  <section id="about" className="about">
    <div className="section-heading text-center">
      <h2>{name}</h2>
    </div>
    <div className="container">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-about-txt">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>Price</h3>
                    <p>{price}</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                  {isAuthenticated && (
                                        <a className="btn" onClick={handleAddToCart}>
                                            Add to Cart
                                        </a>
                                    )}
                  </div>
                  </div>
              </div>
              {!isAuthenticated && (
                                <LogRegSection
                                    text={text}
                                />
                            )}
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="single-about-img">
            <img src={`/${image}`} alt="profile_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Затваряне на модала
        service={service} // Изпращаме данните на продукта към модала
      />
</>

    )
}