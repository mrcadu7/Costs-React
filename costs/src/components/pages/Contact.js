import styles from './Contact.module.css'

function Contact() {
    return (
        <div className={styles.contact_container}>
            <div >
                <h1><span>Contato:</span></h1>
                <p>Clique nas redes sociais abaixo!</p>
                <img src="https://cdn-icons-png.flaticon.com/512/271/271210.png" alt="seta" />
            </div>
        </div>
    )
}

export default Contact