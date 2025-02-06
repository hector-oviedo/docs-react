import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ListItemButton,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

export const MenuPanel = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios
      .get("./sections.json")
      .then((res) => setSections(res.data))
      .catch(() => alert("Failed to load sections.json"));
  }, []);

  const handleClickSection = (url) => {
    sessionStorage.setItem("selectedSection", url);
    window.dispatchEvent(new Event("section-changed"));
  };

  return (
    <Box sx={{ width: "100%" }}>
      {sections.map((item, idx) => {
        // Top-level single "section"
        if (item.type === "section") {
          return (
            <ListItemButton
              key={idx}
              onClick={() => handleClickSection(item.url)}
              sx={{ pl: 1, width: "100%" }}>
              <Typography sx={{fontWeight:'600'}}>{item.label}</Typography>
            </ListItemButton>
          );
        }

        // Top-level "group"
        else if (item.type === "group") {
          return (
            <Accordion
              key={idx}
              disableGutters
              square
              sx={{
                mb: .1,
                "&:before": { display: "none" } // Removes default Accordion divider line
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ m: 0, p: 0, pl: 2, pr:2, mb:0.1, minHeight: "40px" }}
              >
                <Typography>{item.label}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ m: 0, p: 0 }}>
                {item.group.map((sub, subIdx) => {
                  // Sub-sections or sub-groups?
                  if (sub.type === "section") {
                    return (
                      <ListItemButton
                        key={subIdx}
                        onClick={() => handleClickSection(sub.url)}
                        sx={{ pl: 3, width: "100%" }}
                      >
                        <Typography>{sub.label}</Typography>
                      </ListItemButton>
                    );
                  } else if (sub.type === "group") {
                    // If you want more nested accordions inside...
                    return (
                      <Accordion
                        key={subIdx}
                        disableGutters
                        square
                        sx={{
                          "&:before": { display: "none" }
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          sx={{ m: 0, p: 0, pl: 1, minHeight: "40px" }}
                        >
                          <Typography>{sub.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ m: 0, p: 0 }}>
                          {sub.group.map((inner, innerIdx) => (
                            <ListItemButton
                              key={innerIdx}
                              onClick={() => handleClickSection(inner.url)}
                              sx={{ pl: 4, width: "100%" }}
                            >
                              <Typography>{inner.label}</Typography>
                            </ListItemButton>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    );
                  }
                  return null;
                })}
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return null;
        }
      })}
    </Box>
  );
};
