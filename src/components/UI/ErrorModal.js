import Card from "./Card";
import Button from "./Button";
import clasess from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <>
      <div className={clasess.backdrop} onClick={props.onConfirmError}></div>
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
    </>
  );
}
export default ErrorModal;
