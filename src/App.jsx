import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [move, setMove] = useState(false);
  return (
    <div className="model">
      <motion.div 
        className="body"
        // whileHover={{ scale: 1.2 }}       //=========== Hover zoom effect ========
        drag whileDrag={{scale : 1}}         // =========== Able to drag and play =====
      >
      </motion.div>
    </div>
  );
};

export default App;
