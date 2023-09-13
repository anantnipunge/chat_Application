import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";
// import { Button } from "@mui/material";

const MessageForm = (props) => {
  const [value, setValue] = useState(""); //initially value is a empty string
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue(""); // reseting the value to empty string .... msg can not persisted there after sending messages.
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message ..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple="false"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button className="send-button" type="submit">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
