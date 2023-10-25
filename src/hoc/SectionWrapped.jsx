import { styles } from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapped = (Component, idName) => {
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden" // Assuming "hidden" is defined somewhere as a valid animation state
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Component />
                <span className="hash-span" id={idName}>
                </span>
            </motion.section>
        );
    }

    return HOC; // Add this return statement
};

export default SectionWrapped;
