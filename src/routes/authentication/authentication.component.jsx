import SignInForm from "../../components/SignInForm/sign-in-form.component";
import SignUpForm from "../../components/SignUpForm/sign-up-form.component";
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
