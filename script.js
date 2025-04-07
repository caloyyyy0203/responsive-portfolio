// This script uses IntersectionObserver to trigger animations when elements enter the viewport.
// While CSS-only solutions like the :has(:in-viewport) or :view-transition pseudo-classes are emerging,
// they are not yet fully supported across all major browsers. Hence, JavaScript is used as a reliable fallback.
// JavaScript is used only to detect when certain elements are in the viewport; all animations are handled purely with CSS.


// Function to trigger animations when an element comes into the viewport 
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the class to trigger the animation
        entry.target.classList.add('in-view');
        // Optionally, you can unobserve the element after it enters the viewport
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Set up the IntersectionObserver options
  const observerOptions = {
    root: null,           // Use the viewport as the root
    rootMargin: '0px',    // No margin around the root
    threshold: 0.5        // Trigger when 50% of the element is in view
  };
  
  // Create the IntersectionObserver instance
  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
  // Select all the elements you want to animate
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  // Observe each element
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view"); // Remove class when out of view
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold as needed

    elements.forEach(element => observer.observe(element));
});
