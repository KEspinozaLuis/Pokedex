import styles from './loading.module.css'

const Loading = () =>{
    return (
        <div className={styles.loading}>
            <img src="./pokebola.png" alt="pokebola" />
            <span>Loading...</span>
        </div>
    )
}

export default Loading;