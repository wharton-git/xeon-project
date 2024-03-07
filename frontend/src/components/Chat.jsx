import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "./firebase-config";
import './../styles/css/Chat.css'
import './../styles/css/Style.css'
import SEND from './../images/SEND.png'
import ADD from './../images/ADD.png'


export const Chat = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room));
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            const newMessages = [];
            snapshot.forEach((doc) => {
                newMessages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(newMessages);
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe from snapshot listener
    }, [room]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage(""); // Réinitialiser l'état de newMessage après l'envoi
    };

    return (
        <div className="backChat">
            <div className="chat-app">
            <div className="header">
                <h1>Bienvenue dans : <span>{room}</span> </h1> 
            </div>
            <div className="messages">
                {messages.map((message) => (
                    <div key={message.id}>
                        <span className="user">{message.user}</span>
                        <h1>{message.text}</h1>
                    </div>
                )).reverse()} {/* Inverser l'ordre des messages ici */}
            </div>
            <form className="new-message-form ml-5" onSubmit={handleSubmit}>
                <button className="add-button ">
                    <img src={ADD} className="w-10"/>
                </button>
                <input
                    className="new-message-input  mb-2 -translate-y-4 p-2"
                    placeholder="Tapez un message"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type="submit" className="send-button ">
                    <img src={SEND} className=" mx-2 w-10"/>
                </button>
            </form>
        </div>
        </div>
    );
};
