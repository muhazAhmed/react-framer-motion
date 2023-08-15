import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [move, setMove] = useState(false);
  return (
    <div className="model">
      <motion.div 
        className="body"
        animate={{ x : [0, 200, -200, 0, 200, 0]}}
        transition={{repeat : Infinity, duration : 5}}
      >Loading, Please wait...
      </motion.div>
    </div>
  );
};

export default App;
