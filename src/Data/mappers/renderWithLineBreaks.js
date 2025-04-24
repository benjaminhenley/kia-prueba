import React from "react";

const renderWithLineBreaks = (text) => {
    if (!text) return null;
    const parts = text.split("<br/>");
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {part}
      </React.Fragment>
    ));
};

export default renderWithLineBreaks