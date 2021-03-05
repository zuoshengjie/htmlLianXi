import React, { useState, useRef, useEffect } from 'react';

let arr = Array.from({ length: 1000 }, (v, i) => {
  return {
    data: i,
    position: i * 20,
  };
});

const Test = () => {
  const [list] = useState(arr);
  const scrollRef = useRef(null);
  const [listImgs, setList] = useState(list.slice(0, 20));
  const onScroll = (e) => {
    let start = Math.floor(e.target.scrollTop / 20);

      if( scrollRef && scrollRef.current) {
        scrollRef.current.style.height = list.length * 20 - e.target.scrollTop + 'px';
       scrollRef.current.style.paddingTop = e.target.scrollTop + 'px';
      }
 

    // setList(arr.slice(start, start + 10));
    setList(list.slice(start > 5 ? start - 5 : start, start + 10));
  };

  useEffect(() => {
    scrollRef.current.style.height = list.length * 20 + 'px';
    scrollRef.current.style.boxSizing = 'content-box';

  }, []);
  console.log(listImgs, 'listImgs');
  return (
    <div>
      <div style={{ height: 100, overflow: 'auto' }} onScroll={onScroll}>
        <div ref={scrollRef}>
          {listImgs.map((i) => {
            return <div style={{ height: 20 }}>{i.data}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Test;
