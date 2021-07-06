import '../styles/app.scss'
import "/assets/css/bootstrap.min.css";
import "/assets/scss/now-ui-kit.scss?v=1.4.0";
import "/assets/demo/demo.css?v=1.4.0";
import "/assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route} exit="pageExit"  initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial:{
                opacity: 0.3,
                y: -120
                
            },
            pageAnimate: {
                opacity: 1,
                y: -0
                
            },
            exit: {
                opacity: 0.2,
                transition: {duration: .5},
                y: -120
    
            }
        }}>
          <Component {...pageProps} />
        </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
