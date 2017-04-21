import React, { PropTypes } from 'react';
import {
    PrimaryButton,
    Field,
    Input,
    Link,
    WithLabel,
} from 'components/common';
import Slider, { Slide } from 'components/common/slider';
import styles from 'styles/components/account-recovery-form';

const AccountRecoveryForm = ({ textDictionary }) => (
    <div className={styles.form}>
        <header className={styles.header}>
            <h2 className={styles.title}>{textDictionary.title}</h2>
            <p className={styles.helpText}>{textDictionary.registerText}</p>
        </header>
        <section className={styles.content}>
            <Slider
                styles={{
                    slider: styles.slider,
                    slide: styles.slide,
                    slideActive: styles.slideActive,
                }}
                ref={slider => { this.slider = slider; }}
            >
                <Slide className={styles.slide}>
                    <Field>
                        <WithLabel label={textDictionary.emailAddressInput}>
                            <Input type="text" name="emailAddress" />
                        </WithLabel>
                    </Field>
                </Slide>
                <Slide className={styles.slide}>
                    <Field>
                        <WithLabel label={textDictionary.resetCodeInput}>
                            <Input type="password" name="resetCode" />
                        </WithLabel>
                    </Field>
                </Slide>
            </Slider>
        </section>
        <footer className={styles.footer}>
            <PrimaryButton
                styles={{ button: styles.button }}
                onClick={() => { this.slider.next(); }}
            >
                {textDictionary.continueButton}
            </PrimaryButton>
        </footer>
        <footer className={styles.footerLinks}>
            <Link styles={{ link: styles.register }} to="register">{textDictionary.registerLink}</Link>
            <Link styles={{ link: styles.login }} to="login">{textDictionary.loginLink}</Link>
        </footer>
    </div>
);

AccountRecoveryForm.propTypes = {
    textDictionary: PropTypes.shape({
        title: PropTypes.string,
        registerText: PropTypes.string,
        continueButton: PropTypes.string,
        emailAddressInput: PropTypes.string,
        resetCodeInput: PropTypes.string,
        registerLink: PropTypes.string,
        loginLink: PropTypes.string,
    }),
};

AccountRecoveryForm.defaultProps = {
    textDictionary: {
        title: 'Account Recovery',
        registerText: 'Please complete the form to recover your account.',
        continueButton: 'Continue',
        emailAddressInput: 'Email Address',
        resetCodeInput: 'Reset Code',
        registerLink: 'Create new account',
        loginLink: 'Login',
    },
};

export default AccountRecoveryForm;
