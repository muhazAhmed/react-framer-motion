import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="model">
      <motion.div
        className="body"
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => {
          setRotate(!rotate);
        }}
      ></motion.div>
    </div>
  );
};

export default App;
