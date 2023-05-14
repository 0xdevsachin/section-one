import { useEffect } from "react";
import "./style.css";

const ScrollSection = () => {
  let index = 0;
  const handleScroll = () => {
    const currentPosition = document.querySelector('.App').scrollTop;
    const NodeLists = document.querySelectorAll('span')
    for (const item of NodeLists) {
      if (currentPosition === 0) {
        item.style.opacity = 0.5;
        index = 0;
      }
      else if (Number(String(document.getElementById('spanWhite').style.top).slice(0,-2)) <= currentPosition) {
        if(NodeLists.length <= index) break;
        const newItem = NodeLists[index];
        if(!newItem) break;
        setTimeout(() => {
          newItem.style.opacity = 1;
        }, 500);
        index++;
        console.log("bottom", currentPosition)
        if(currentPosition <= 100) break;
      } else {
        if(NodeLists.length <= index) break;
        const newItem = NodeLists[index];
        if(!newItem) break;
        setTimeout(() => {
          newItem.style.opacity = 0.5;
        }, 500);
        console.log(index);
        index--;
        console.log("top", currentPosition)
      }
    }
    document.getElementById('spanWhite').style.top = `${Number(currentPosition)}px`
  };
  useEffect(() => {
    const scrollableContent = document.querySelector('.App');
    scrollableContent.addEventListener('scroll', handleScroll);
  }, [])
  return (
    <div className="App">
      <div className="relative" id="relative">
        <p className="spanContainer" id="spanWhite">
          <span>In</span> <span>Chronicle</span> <span>everything</span>
          <span>is</span> <span>made</span> <span>with</span>{" "}
          <span>Blocks</span>
          <span>that</span> <span>come</span> <span>with</span>{" "}
          <span>pixel</span>
          <span>perfect</span> <span>design,</span> <span>interactivity</span>
          <span>and</span> <span>motion</span> <span>out</span>{" "}
          <span>of</span>
          <span>the</span> <span>box.</span> <span>Instead</span>{" "}
          <span>of</span>
          <span>designing</span> <span>from</span> <span>scratch,</span>
          <span>simply</span> <span>choose</span> <span>the</span>
          <span>right</span> <span>one</span> <span>from</span>{" "}
          <span>our</span>
          <span>library</span> <span>of</span> <span>blocks</span>{" "}
          <span>and</span>
          <span>see</span> <span>the</span> <span>magic</span>{" "}
          <span>unfold.</span>
        </p>
      </div>
    </div>
  );
}

export default ScrollSection;
