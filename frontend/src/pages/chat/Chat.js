import MessageReceived from "./Messages";
import SendMessage from "./SendMessage";
import RoomAndUsers from "./RoomAndUsers";
import styles from "./styles.module.css";

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsers socket={socket} username={username} room={room} />
      <div>
        <MessageReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;
