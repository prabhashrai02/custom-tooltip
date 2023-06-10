import styles from './inputBox.module.css';

const InputBox = (props: Props) => {

    const { label, onChange } = props;

    return (
        <div className={styles.inputBoxContainer}>
            <label> {label} </label>
            <input onChange={onChange} />
        </div>
    )
}

type Props = {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default InputBox;