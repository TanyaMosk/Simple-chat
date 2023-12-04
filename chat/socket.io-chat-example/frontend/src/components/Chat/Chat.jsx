import styles from "./chat.module.css";

const Chat = ({items,name}) => {
    const elements = items.map(({id, type, message}) => {
        const className = type === "you" ? styles.youMessage : styles.userMessage;
        const classType = type === "you" ? styles.youType : styles.userType;
        return (
            <div key={id} >                
            <p className={classType}>{type === "you" ? "you" : name}</p>
            <p className={className}>{message}</p>
            </div>
        )
    });
    
    return (
        <div className={styles.chat}>
            {elements}
        </div>
    )
}

export default Chat;

Chat.defaultProps = {
    items: []
}