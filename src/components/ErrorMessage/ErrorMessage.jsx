import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>Something went wrong! Refresh the page.</p>
    </div>
  );
};

export default ErrorMessage;
