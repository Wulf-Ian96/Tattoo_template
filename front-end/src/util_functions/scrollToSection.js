export default function scrollToSection(elementRef) {
  window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
}
