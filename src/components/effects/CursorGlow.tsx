import { motion, MotionValue } from "framer-motion";

type Props = {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
};

export default function CursorGlow({
  smoothX,
  smoothY
}: Props) {
  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.07] blur-[100px] pointer-events-none z-0"
    />
  );
}