import React, { useEffect, useState } from "react";
import marked from "marked";

export const About: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const readmePath = require("./README.md");

    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setMarkdown(marked(text));
      });
  }, []);

  return (
    <section>
      <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
    </section>
  );
};
