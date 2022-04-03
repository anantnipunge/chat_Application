const MyMessage = ({ message }) => {
  if (message?.attachment?.length > 0) {
    //message should be image
    // if message is image RENDERING image below in return...
    return (
      <img
        src={MessageChannel.attachments[0]/*take fitst attachment */.file} //to get the source message then attachment and then file
        alt="messaage-attchment"
        className="messaage-image"
        style={{ float: "right" }}
      />
    );
  }

  //if IT'S NOT image rendering is not there
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#063616",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
