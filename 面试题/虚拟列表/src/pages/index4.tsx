import React, { useState, useRef } from 'react';

let arr = Array.from({ length: 1000 }, (v, i) => {
  return {
    data: i,
    position: i * 20,
  };
});

const Test = () => {
  const [list] = useState(arr);
  const domRef = useRef(null);
  const [renderList, setRenderList] = useState(list.slice(0, 20));
  const handleScroll = (e) => {
    const start = Math.floor(e.target.scrollTop / 20);
    // console.log(start, 'start');
    debugger;
    domRef && domRef.current
      ? (domRef.current.style.marginTop = e.target.scrollTop + 'px')
      : null;
    setRenderList(list.slice(start > 5 ? start - 5 : start, start + 10));
  };
  console.log(renderList,'renderList')
  return (
    <div>
      <div style={{ height: 100, overflow: 'auto' }} onScroll={handleScroll}>
        <div
          style={{ height: `${list.length * 20}`, position: 'relative' }}
          ref={domRef}
        >
          {renderList.map((item) => {
            return (
              <div
                // style={{ height: 20, position: 'absolute', top: item.position }}
                style={{ height: 20 }}
              >
                {item.data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Test;
