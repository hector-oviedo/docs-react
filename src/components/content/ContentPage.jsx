import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { ContentSnippet } from "./ContentSnippet";
import { ContentTable } from "./ContentTable";
import { ErrorPopup } from "../error/ErrorPopup";

export const ContentPage = () => {
  const [sectionURL, setSectionURL] = useState(sessionStorage.getItem("selectedSection") || "");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const loadSection = (url) => {
    if (!url) {
      setData([]);
      return;
    }
    axios.get(url)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setData(res.data);
          setError("");
        } else {
          setData([]);
          setError(`Invalid format at ${url}. Expected an array.`);
        }
      })
      .catch(() => {
        setData([]);
        setError(`Error loading ${url}`);
      });
  };

  useEffect(() => {
    loadSection(sectionURL);

    const handleSectionChanged = () => {
      const newURL = sessionStorage.getItem("selectedSection");
      setSectionURL(newURL);
      loadSection(newURL);
    };
    window.addEventListener("section-changed", handleSectionChanged);
    return () => window.removeEventListener("section-changed", handleSectionChanged);
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: "100vh",
        // Use theme background
        bgcolor: (theme) => theme.palette.background.default,
        py: .5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 900,
          // Use paper for content
          bgcolor: (theme) => theme.palette.background.paper,
          pt: 1,
          pl:10,
          pr:10,
          borderRadius: 0
        }}
      >
        {!sectionURL && <Typography>Select a section from the sidebar.</Typography>}

        <ErrorPopup error={error} onClose={() => setError("")} />

        {data.map((item, idx) => {
          switch (item.type) {
            case "header":
              return (
                <Typography key={idx} variant={`h${item.h || 2}`} sx={{ mt: 2 }}>
                  {item.content}
                </Typography>
              );
            case "p":
              return (
                <ReactMarkdown key={idx} className="markdown-content">
                  {item.content}
                </ReactMarkdown>
              );
            case "table":
              return (
                <ContentTable
                  key={idx}
                  headers={item.headers}
                  rows={item.rows}
                />
              );
            case "snippet":
            case "code":
              return <ContentSnippet key={idx} content={item.content} />;
            default:
              return null;
          }
        })}
      </Box>
    </Box>
  );
};
