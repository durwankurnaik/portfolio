import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, idx) => (
          <a
            key={item}
            href={`#${item}`}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
