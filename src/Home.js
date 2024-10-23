import React, { useState } from "react";
import menuJson from "./data";
import imageBanner from "./assets/images/Heading.png";
import {
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
  FaChevronUp,
  FaCity,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa"; // Import WhatsApp icon

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [openCategories, setOpenCategories] = useState(
    menuJson.categories.map((category) => category.category_name)
  ); // Open all categories by default

  const handleCategoryClick = (category) => {
    if (openCategories.includes(category.category_name)) {
      setOpenCategories(
        openCategories.filter((name) => name !== category.category_name)
      );
    } else {
      setOpenCategories([...openCategories, category.category_name]);
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+39 351 192 3375", "_blank"); // Replace with your WhatsApp number
  };

  const handlePhoneClick = () => {
    navigator.clipboard.writeText("+39 351 192 3375"); // Replace with your phone number
    alert("Phone number copied to clipboard!");
  };

  return (
    <div style={{ backgroundColor: "#F5F7F8", height: "100%" }}>
      <header style={{ position: "relative", textAlign: "center" }}>
        <img
          src={imageBanner}
          alt="Restaurant Banner"
          style={{
            width: "100%",
            height: "300px",
            // objectFit: "cover",
            objectFit: "contain",
          }}
        />
        <div style={{ marginTop: "50px", zIndex: 1 }}>
          <h2 style={{ margin: "10px 0" }}>PRONTO INTERVENTO 24H</h2>
          <div style={{ backgroundColor: "#F5F7F8", width: "100%" }}>
            <div style={styles.cardsContainer}>
              <Card
                icon={<FaCity />}
                // link="https://www.whatsapp.com"
                title="Bologna"
              />
              {/* <Card
                icon={<FaWhatsapp />}
                link="https://www.whatsapp.com"
                title="WhatsApp"
              /> */}
              {/* <Card
                icon={<FaPhone />}
                link="tel:+39 351 192 3375"
                title="Call"
              /> */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <FaClock />
                </div>
                <div style={styles.cardLink}>24hr</div>
              </div>
              {/* <Card
                icon={<FaMapMarkerAlt />}
                link="/location"
                title="Location"
              /> */}
            </div>
          </div>
        </div>
      </header>

      <nav style={styles.nav}>
        {menuJson.categories.map((category) => (
          <div key={category.category_name} style={styles.category}>
            <div
              onClick={() => handleCategoryClick(category)}
              style={styles.button}
            >
              <div style={styles.titleDivCategory}>
                <div>
                  <img
                    src={category.image}
                    alt={category.category_name}
                    style={styles.categoryImage}
                  />
                </div>

                <div style={styles.categoryName}>{category.category_name}</div>
              </div>
              <div style={styles.categoryArrow}>
                {openCategories.includes(category.category_name) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {openCategories.includes(category.category_name) && (
              <div style={styles.dropdown}>
                {category.products.map((product) => (
                  <div key={product.name} style={styles.productCard}>
                    {Array.isArray(product.description) ? (
                      <ul>
                        {product.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{product.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div style={styles.circle} onClick={handleWhatsAppClick}>
        <FaWhatsapp style={styles.icon_wp} />
      </div>
      <div style={styles.phoneCircle} onClick={handlePhoneClick}>
        <FaPhone style={styles.icon_phone} />
      </div>
    </div>
  );
};

// Card component for social media and contact links
const Card = ({ icon, link, title }) => (
  <div style={styles.card}>
    <div style={styles.cardHeader}>{icon}</div>
    <a href={link} style={styles.cardLink}>
      {title}
    </a>
  </div>
);

// Styles object for responsive design
const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  categoryImage: {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  categoryName: {
    marginLeft: "20px",
    fontSize: "18px",
    fontWeight: 500,
  },
  categoryArrow: {
    alignSelf: "center",
  },
  category: {
    width: "90%",
    borderRadius: "20px",
    textAlign: "center",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: "20px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
  },
  dropdown: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  productCard: {
    width: "90%",
    borderRadius: "10px",
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left", // Ensure text alignment starts from the left
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align content to flex start
  },
  productImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  titleDivCategory: {
    display: "flex",
    height: "100%",
  },
  cardsContainer: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    margin: "20px auto",
    backgroundColor: "#fff",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
  cardHeader: {
    fontSize: "30px",
    marginBottom: "5px",
  },
  cardLink: {
    marginTop: "5px",
    textDecoration: "none",
    color: "#000",
  },
  icon_wp: {
    color: "#fff",
    fontSize: "40px",
    cursor: "pointer",
  },
  icon_phone: {
    color: "#fff",
    fontSize: "35px",
    cursor: "pointer",
  },
  phoneCircle: {
    backgroundColor: "green",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "fixed",
    right: "20px", // Adjust distance from the right edge
    bottom: "20px", // Adjust distance from the bottom edge
  },
  circle: {
    backgroundColor: "green",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "fixed",
    left: "20px", // Adjust distance from the right edge
    bottom: "20px",
  },
};

export default Home;
