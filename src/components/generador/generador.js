import React, {useState} from "react";
import styles from './generador.module.css';

const Generador = (props) =>{
    const {point, setPoint} = props;
    const  [validar, setValidar] = useState('')
    const [point2, setPoint2] = useState('');

    const onChange = (e) =>{
        setPoint2(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(point2.length < 2){
            setValidar("Must be at least two characters")
        }else{
        setValidar('');
        setPoint([...point, {shore: point2, completed:false}]);
        setPoint2("")};
    }

    return (
        <div>{validar !== ''?
        <p className={styles.para}>{validar}</p>:""}
        <form className={styles.form1}onSubmit={onSubmit}>
        <input className={styles.input1} type="text" placeholder="Add something to do!" onChange={onChange} value={point2}></input>
        <input className={styles.input2} type="submit" value="Add"></input>
        </form>
        </div>
    )

}
export default Generador;