import { Fragment, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const PageLayout = ({
  children,
  title,
  description,
  keywords,
  image
}: Props): JSX.Element => (
  <Fragment>
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </Fragment>
);

export default PageLayout;
