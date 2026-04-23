import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PopupAlert = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 bg-card border border-border rounded-xl p-4 max-w-xs shadow-lg"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
          <p className="text-2xl mb-2">🔔</p>
          <p className="font-display text-lg text-primary tracking-wide">Breaking News!</p>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Sharma ji ka beta ne phir topper kiya. Nation mourns. 😭
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupAlert;
