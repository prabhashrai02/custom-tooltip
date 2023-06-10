import MobileScreen from "../MobileScreen";
import TooltipForm from "../TooltipForm";

import styles from './home.module.css';

const Home = () => {

    return (
        <div className={styles.homepage}>
            <div className={styles.formScreenContainer}>
                <TooltipForm />
                <MobileScreen />
            </div>
        </div>
    )
}

export default Home;
