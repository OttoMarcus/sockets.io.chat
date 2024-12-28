import styles from "./UserCardLine.module.scss";
import Image from 'react-bootstrap/Image';

const UserCardLine = ({name, avatar}) => {
    return (
        <div className={styles.avatarNameWrapper}>
            <Image src={`${avatar}/65x70`} roundedCircle />
            <title>{name}</title>
            {/*<img className={styles.avatar} src={avatar} alt="avatar"/>*/}
        </div>
    )
}

export default UserCardLine