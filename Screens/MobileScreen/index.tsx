import Image from "next/image";

import mobilePhone from '@/Assets/phoneSvg.svg';

import styles from './mobileScreen.module.css';

const MobileScreen = () => {
    return (
        <div>
            <Image src={mobilePhone}
                className={styles.phoneScreen}
                alt={"mobile phone"}
                height={500}
                width={300} />
        </div>
    )
}

export default MobileScreen;