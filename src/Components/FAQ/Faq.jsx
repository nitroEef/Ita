import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "Where is the Ilobu Tilers Association located?",
    answer:
      "We are based in Ilobu, Osun State, Nigeria, serving clients across the region."
  },
  {
    question: "How is the association run?",
    answer:
      "The association is managed by elected executives and guided by our patrons and matrons. We operate with transparency, unity, and professionalism."
  },
  {
    question: "How can I contact the association?",
    answer:
      "You can reach us via phone, email, or by visiting our office. Our contact details are listed on the Contact Us page."
  },
  {
    question: "How do I become a member?",
    answer:
      "Membership is open to professional tilers who meet our standards. You can apply through our official membership form or in person."
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide professional wall and floor tiling for residential, commercial, and industrial projects. We also offer training and mentorship to upcoming tilers."
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes, all our members uphold strict quality standards, and we ensure customer satisfaction on every project."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" data-aos="fade-right">
      <h2 data-aos="fade-up">Frequently Asked Questions</h2>
      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <span className="arrow">{activeIndex === index ? "−" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
