import React, { Component, PropTypes } from 'react';
import Slider, { Slide } from 'components/common/slider';
import { TitleTypes } from 'constants/common/title';
import {
    Field,
    Input,
    ShowablePasswordInput,
    Title,
    PrimaryButton,
    Link,
    WithLabel,
} from 'components/common';
import styles from 'styles/components/registration-form';

export default class RegistrationForm extends Component {
    state = {
        accountDetailsFormIsActive: true,
        aboutYouFormIsActive: false,
    }

    handleRegisterButtonClick = event => {
        event.preventDefault();
        this.slider.next();
        this.setState({
            accountDetailsFormIsActive: false,
            aboutYouFormIsActive: true,
        });
    }

    render() {
        const { textDictionary } = this.props;

        return (
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
                            <Title type={TitleTypes.FIELDSET_HEADING}>
                                {textDictionary.accountDetailsTitle}
                            </Title>
                            <Field>
                                <WithLabel label={textDictionary.emailAddressInput}>
                                    <Input type="email" name="emailAddress" />
                                </WithLabel>
                            </Field>
                            <Field>
                                <WithLabel label={textDictionary.passwordInput}>
                                    <ShowablePasswordInput name="password" />
                                </WithLabel>
                            </Field>
                        </Slide>
                        <Slide className={styles.slide}>
                            <Title type={TitleTypes.FIELDSET_HEADING}>
                                {textDictionary.aboutYouTitle}
                            </Title>
                            <Field>
                                <Input type="text" name="title" label={textDictionary.titleDropdown} />
                            </Field>
                            <Field>
                                <Input type="text" name="firstName" label={textDictionary.firstNameInput} />
                            </Field>
                            <Field>
                                <Input type="text" name="lastName" label={textDictionary.lastNameInput} />
                            </Field>
                            <Field>
                                <Input type="text" name="dateOfBirth" label={textDictionary.dateOfBirthInput} />
                            </Field>
                            <Field>
                                <Input type="text" name="postcode" label={textDictionary.postCodeInput} />
                            </Field>
                        </Slide>
                    </Slider>
                </section>
                <footer className={styles.footer}>
                    <PrimaryButton
                        styles={{ primaryButton: styles.button }}
                        onClick={this.handleRegisterButtonClick}
                    >
                        {textDictionary.registerButton}
                    </PrimaryButton>
                </footer>
                <footer className={styles.footerLinks}>
                    <Link styles={{ link: styles.resetPassword }} to="account-recovery">{textDictionary.resetPasswordLink}</Link>
                    <Link styles={{ link: styles.login }} to="login">{textDictionary.loginLink}</Link>
                </footer>
            </div>
        );
    }
}

RegistrationForm.propTypes = {
    textDictionary: PropTypes.shape({
        title: PropTypes.string,
        registerText: PropTypes.string,
        registerButton: PropTypes.string,
        accountDetailsTitle: PropTypes.string,
        passwordInput: PropTypes.string,
        emailAddressInput: PropTypes.string,
        aboutYouTitle: PropTypes.string,
        titleDropdown: PropTypes.string,
        firstNameInput: PropTypes.string,
        lastNameInput: PropTypes.string,
        dateOfBirthInput: PropTypes.string,
        postCodeInput: PropTypes.string,
        resetPasswordLink: PropTypes.string,
        loginLink: PropTypes.string,
    }),
};

RegistrationForm.defaultProps = {
    textDictionary: {
        title: 'Create Account',
        registerText: 'Please complete the form to sign up for a new account.',
        registerButton: 'Sign up',
        accountDetailsTitle: 'Account details:',
        passwordInput: 'Password',
        emailAddressInput: 'Email Address',
        aboutYouTitle: 'About you:',
        titleDropdown: 'Title',
        firstNameInput: 'First Name',
        lastNameInput: 'Last Name',
        dateOfBirthInput: 'Date of Birth',
        postCodeInput: 'Postcode',
        resetPasswordLink: 'Forgotten password?',
        loginLink: 'Login',
    },
};
