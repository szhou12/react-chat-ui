import { Flex, Link, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion-Enhanced Components
export const MotionBox = motion.create(chakra.div);
export const MotionSpan = motion.create(chakra.span);
export const MotionSvg = motion.create(chakra.svg);
export const MotionImg = motion.create(chakra.img);
export const MotionButton = motion.create(chakra.button);
export const MotionFlex = motion.create(Flex);
export const MotionLink = motion.create(Link);
export const MotionText = motion.create(Text);