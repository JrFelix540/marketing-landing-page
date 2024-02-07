function toggleFAQ(elementId) {
  const faqCard = document.querySelector(elementId);
  const collapsible = faqCard.querySelector(".collapsible");
  collapsible.classList.toggle("active");
}

function toggleCollapse(elementId) {
  const faqCard = document.querySelector(elementId);
  const collapsible = faqCard.querySelector(".faq__collapsible");
  const faqIcon = faqCard.querySelector(".faq__icon");
  collapsible.classList.toggle("active");
  faqIcon.classList.toggle("active");
}
