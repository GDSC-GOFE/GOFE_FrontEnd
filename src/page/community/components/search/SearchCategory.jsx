import React, { useState, useEffect, useRef } from "react";

import { ReactComponent as Line_bar } from "../../../../assets/community/Line_bar.svg";

const SearchCategory = () => {
  const resizerRef = useRef(null);
  const topSideRef = useRef(null);
  const bottomSideRef = useRef(null);

  const [isResizing, setIsResizing] = useState(false);
  const [y, setY] = useState(0);
  const [topHeight, setTopHeight] = useState(0);

  useEffect(() => {
    const moveHandler = (e) => {
      e.stopPropagation(); // 이벤트 전파 방지
      if (!isResizing) return;

      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const dy = clientY - y;
      const newTopHeight =
        ((topHeight + dy) * 100) /
        resizerRef.current.parentNode.getBoundingClientRect().height;
      topSideRef.current.style.height = `${newTopHeight}%`;

      document.body.style.cursor = "row-resize";
      topSideRef.current.style.userSelect = "none";
      topSideRef.current.style.pointerEvents = "none";
      bottomSideRef.current.style.userSelect = "none";
      bottomSideRef.current.style.pointerEvents = "none";
    };

    const upHandler = (e) => {
      e.stopPropagation(); // 이벤트 전파 방지
      setIsResizing(false);
      document.body.style.removeProperty("cursor");
      topSideRef.current.style.removeProperty("user-select");
      topSideRef.current.style.removeProperty("pointer-events");
      bottomSideRef.current.style.removeProperty("user-select");
      bottomSideRef.current.style.removeProperty("pointer-events");
    };

    if (isResizing) {
      document.addEventListener("mousemove", moveHandler);
      document.addEventListener("mouseup", upHandler);
      document.addEventListener("touchmove", moveHandler);
      document.addEventListener("touchend", upHandler);
    } else {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", upHandler);
      document.removeEventListener("touchmove", moveHandler);
      document.removeEventListener("touchend", upHandler);
    }

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", upHandler);
      document.removeEventListener("touchmove", moveHandler);
      document.removeEventListener("touchend", upHandler);
    };
  }, [isResizing, y, topHeight]);

  const downHandler = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    setIsResizing(true);
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setY(clientY);
    setTopHeight(topSideRef.current.getBoundingClientRect().height);
  };

  return (
    <div className="community-clear-view-container">
      <div className="community-clear-view-show-container">
        <div className="community-clear-view-show-top" ref={topSideRef}></div>
        <div
          className="community-clear-view-show-resizer"
          id="dragMe"
          ref={resizerRef}
          onMouseDown={downHandler}
          onTouchStart={downHandler}
        >
          <Line_bar />
        </div>
        <div className="community-clear-view-show-bottom" ref={bottomSideRef}>
          <div className="community-clear-view-show-bottom-content">
            <div className="community-clear-view-show-bottom-content-title">
              카테고리
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
