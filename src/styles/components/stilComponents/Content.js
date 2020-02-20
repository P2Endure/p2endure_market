import React from "react";

const Content = ({ styles }) => {
  const eMarketHead= {
    title: `Welcome to the P2Endure e-Marketplace`,
    summary:
      "Upload a building energy model and integrate the building products below regaring your renovation scenario",
  };

  const posts = Array(1).fill(eMarketHead);

  const contentStyle = {
    paddingTop: styles.showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;