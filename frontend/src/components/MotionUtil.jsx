import { Flex, Link, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion-Enhanced Components
export const MotionBox = motion(chakra.div);
export const MotionSpan = motion(chakra.span);
export const MotionSvg = motion(chakra.svg);
export const MotionImg = motion(chakra.img);
export const MotionButton = motion(chakra.button);
export const MotionFlex = motion(Flex);
export const MotionLink = motion(Link);
export const MotionText = motion(Text);