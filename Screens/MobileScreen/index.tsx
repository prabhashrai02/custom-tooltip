import styles from './mobileScreen.module.css';

const MobileScreen = () => {
    return (
        <div>
            <div className={styles.backgroundMobile}>
                <div className={styles.buttonsContainer}>
                    <div className={styles.buttonsList}>
                        <button className={styles.button}> Click here</button>
                        <button className={styles.button}> Click here</button>
                    </div>
                    <div className={styles.centerButton}>
                        <button className={styles.button}> Click here</button>
                    </div>
                    <div className={styles.buttonsList}>
                        <button className={styles.button}> Click here</button>
                        <button className={styles.button}> Click here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileScreen;