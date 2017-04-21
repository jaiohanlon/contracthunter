import React, { PropTypes } from 'react';
import {
    PrimaryButton,
    Form,
    Field,
    Input,
    ShowablePasswordInput,
    Link,
    WithLabel,
} from 'components/common';
import styles from 'styles/components/login-form';

const LoginForm = ({
    textDictionary,
}) => (
    <Form className={styles.form}>
        <header className={styles.header}>
            <h2 className={styles.title}>{textDictionary.title}</h2>
            <p className={styles.helpText}>{textDictionary.loginText}</p>
        </header>
        <section className={styles.content}>
            <Field>
                <WithLabel label={textDictionary.usernameInput}>
                    <Input type="text" name="username" />
                </WithLabel>
            </Field>
            <Field>
                <WithLabel label={textDictionary.passwordInput}>
                    <ShowablePasswordInput name="password" />
                </WithLabel>
            </Field>
        </section>
        <footer className={styles.footer}>
            <PrimaryButton styles={{ primaryButton: styles.button }}>
                <Link to="/app/" styles={{ link: styles.link }}>
                    {textDictionary.loginButton}
                </Link>
            </PrimaryButton>
        </footer>
        <footer className={styles.footerLinks}>
            <Link styles={{ link: styles.resetPassword }} to="account-recovery">{textDictionary.resetPasswordLink}</Link>
            <Link styles={{ link: styles.register }} to="register">{textDictionary.registerLink}</Link>
        </footer>
    </Form>
);

LoginForm.propTypes = {
    textDictionary: PropTypes.shape({
        title: PropTypes.string,
        loginText: PropTypes.string,
        loginButton: PropTypes.string,
        usernameInput: PropTypes.string,
        passwordInput: PropTypes.string,
        resetPasswordLink: PropTypes.string,
        registerLink: PropTypes.string,
    }),
};

LoginForm.defaultProps = {
    textDictionary: {
        title: 'Sign in',
        loginText: 'Please use your login credentials to gain access.',
        loginButton: 'Login',
        usernameInput: 'Username',
        passwordInput: 'Password',
        resetPasswordLink: 'Forgotten password?',
        registerLink: 'Create new account',
    },
};

export default LoginForm;
