import React from "react";
import ReactPageScroller from "react-page-scroller";
import Events from "src/components/Shared/BottomSheet/Events/Events";
import Links from "src/components/Shared/BottomSheet/Links/Links";
import Socials from "src/components/Shared/BottomSheet/Socials/Socials";
import VLinks from "src/components/Shared/BottomSheet/VLinks/VLinks/VLinks";

export default function test() {
  return (
    <>
      {/* <ReactPageScroller
        // pageOnChange={this.handlePageChange}
        // onBeforePageScroll={this.handleBeforePageChange}
        // customPageNumber={this.state.currentPage}
        containerHeight={"100vh"}
      >
        {[
          { Com: VLinks },
          { Com: Links },
          { Com: Socials },
          { Com: Events },
        ].map((Item, index) => (
          <div
            key={index}
            style={{
              width: "100vw",
              maxHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Item.Com />
          </div>
        ))}
      </ReactPageScroller> */}
      {/* <VLinks /> */}
      <div
        style={{
          border: "2px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // flexWrap: "wrap",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid yellow",
            // flex: "1 1 auto",
          }}
        ></div>
        <div
          style={{ width: "100px", height: "100px", border: "2px solid green" }}
        ></div>

        <div
          style={{ width: "100px", height: "100px", border: "2px solid green" }}
        ></div>
      </div>
    </>
  );
}

// https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx
