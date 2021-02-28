import { useEffect, useState, useRef } from "react";

function useSticky1 () {
 const [isSticky1, setSticky1] = useState(false);
  const element1 = useRef(null)

  const handleScroll = () => {
    window.scrollY > element1.current.getBoundingClientRect().bottom
    ? setSticky1(true)
    : setSticky1(false);
  }

  const debounce = (func, wait = 10, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
useEffect(() => {
  window.addEventListener("scroll", debounce(handleScroll))
  return () => {
          window.removeEventListener("scroll", () => handleScroll);
        }  
}, [debounce, handleScroll])

  return { isSticky1, element1 }
}

export default useSticky1
