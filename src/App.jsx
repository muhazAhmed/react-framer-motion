import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [move, setMove] = useState(false);
  return (
    <div className="model">
      <motion.div
        className="body"
        animate={{ x: move ? "100%" : "-100%" }}
        // transition={{ type : "tween", duration : 1 }}       // ===== For Smooth transition ===========
        transition={{ type : "spring", bounce : 0.4 }}       // ===== For bounce transition ===========
        onClick={() => {
          setMove(!move);
        }}
      ></motion.div>
    </div>
  );
};

export default App;
