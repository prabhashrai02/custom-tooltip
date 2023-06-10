import styles from './inputBox.module.css';

const InputBox = (props: Props) => {

    const { label, value, onChange, type } = props;

    return (
        <div className={styles.inputBoxContainer}>
            <label> {label} </label>
            <input onChange={onChange} value={value} type={type} />
        </div>
    )
}

type Props = {
    label: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default InputBox;