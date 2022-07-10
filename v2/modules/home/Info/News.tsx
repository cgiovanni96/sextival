import { Fragment } from "react";
import { Box, Button, Space, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

import { Go } from "@sextival/components/icons/Go";
import { variants } from "./info.variants";
import { Section } from "@sextival/components/Section/Section";
import { Title } from "@sextival/components/Section/Title";

const Data = [
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
];

export const News = () => {
  const { colors } = useMantineTheme();

  return (
    <Section variants={variants}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title text={"Notizie dal Sexystaff"} />

        <Button variant="light" onClick={() => console.log("more")}>
          ...
        </Button>
      </Box>

      {Data.map((news, i) => (
        <Fragment key={i}>
          <Space h="sm" />

          <Box sx={{ display: "flex", color: "#550026", alignItems: "center" }}>
            <Text size={14}>{news.date}</Text>
            <Box sx={{ flex: 1, display: "flex", flexWrap: "wrap" }} mx={20}>
              <Text size={14} sx={{ lineHeight: 1.1 }}>
                {news.title}
              </Text>
            </Box>
            <Go color="#550026" strokeWidth={1.5} />
          </Box>
        </Fragment>
      ))}
    </Section>
  );
};
