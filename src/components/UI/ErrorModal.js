import Card from "./Card";
import Button from "./Button";
import clasess from "./ErrorModal.module.css";
import ReactDom from "react-dom";

function BackDrop(props) {
  return (
    <div className={clasess.backdrop} onClick={props.onConfirmError}></div>
  );
}

function Overlay(props) {
  return (
    <Card className={clasess.modal}>
      <header className={clasess.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={clasess.content}>
        <p>{props.message}</p>
      </div>
      <footer className={clasess.actions}>
        <Button onClick={props.onConfirmError}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onConfirmError={props.onConfirmError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirmError={props.onConfirmError}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
export default ErrorModal;
