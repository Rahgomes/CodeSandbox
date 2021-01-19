import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, id, label, value, setValue, ...props }) => {
    return (
        <div className={styles.boxInput}>
            <label htmlFor={id} className={styles.label}>{label}:</label>
            <input className={styles.input} type={type} id={id} value={value} onChange={({ target }) => setValue(target.value)} name={id} {...props} />
        </div>
    )
}

export default Input
