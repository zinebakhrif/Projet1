
  //******** slider 1 ***************

  const container = document.querySelector(".grid-item");
  const cards = document.querySelector(".items");
  
  /* keep track of user's mouse down and up */
  let isPressedDown = true;
  /* x horizontal space of cursor from inner container */
  let cursorXSpace;
  
  container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    container.style.cursor = "grabbing";
  });
  
  container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
  });
  
  window.addEventListener("mouseup", () => {
    isPressedDown = false;
  });
  
  container.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards();
  });
  
  function boundCards() {
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();
  
    if (parseInt(cards.style.left) > 0) {
      cards.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
      cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
  }

  //******** slider 2 ***************
  const container2 = document.querySelector(".slider-item");
    const cards2 = document.querySelector(".items2");
    
    /* keep track of user's mouse down and up */
    let isPressedDown2 = true;
    /* x horizontal space of cursor from inner container */
    let cursorXSpace2;
    
    container2.addEventListener("mousedown", (e) => {
      isPressedDown2 = true;
      cursorXSpace2 = e.offsetX - cards2.offsetLeft;
      container2.style.cursor = "grabbing";
    });
    
    container2.addEventListener("mouseup", () => {
      container2.style.cursor = "grab";
    });
    
    window.addEventListener("mouseup", () => {
      isPressedDown2 = false;
    });
    
    container2.addEventListener("mousemove", (e) => {
      if (!isPressedDown2) return;
      e.preventDefault();
      cards2.style.left = `${e.offsetX - cursorXSpace2}px`;
      boundCards2();
    });
    
    function boundCards2() {
      const container_rect = container2.getBoundingClientRect();
      const cards_rect = cards2.getBoundingClientRect();
    
      if (parseInt(cards2.style.left) > 0) {
        cards2.style.left = 0;
      } else if (cards_rect.right < container_rect.right) {
        cards2.style.left = `-${cards_rect.width - container_rect.width}px`;
      }
    }

 
