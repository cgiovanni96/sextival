import { Box, Space, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

import { Go } from "@sextival/components/icons/Go";
import { variants } from "./info.variants";
import { Title } from "@sextival/components/Section/Title";
import Section from "@sextival/components/Section";

export const Crowdfunding = () => {
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
        <Title text={"Sostienici"} />

        <Box
          component={motion.div}
          animate={{ x: -5 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatType: "mirror",
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            cursos: "ponter",
            "& svg ": { cursor: "pointer" },
          }}
          onClick={() => console.log("hello")}
        >
          <Go color={colors["sexyred"][4]} strokeWidth={1.5} size={28} />
        </Box>
      </Box>

      <Space h="xs" />
      <Text size={14} color="#0C082B">
        Il Sextival vuole prima di tutto essere una fonte di informazioni per
        chiunque, perché i diritti, anche quelli sessuali, <b>non si pagano</b>.
      </Text>

      <Space h="sm" />

      <Text size={14} color="#0C082B">
        Per questo, abbiamo lanciato una campagna di crowdfunding.{" "}
        <b>Sostieni il Sextival, e scopri i premi!</b>
      </Text>
    </Section>
  );
};
