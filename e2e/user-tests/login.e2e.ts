import detox, { device } from 'detox';

import { WelcomeFirstSelector } from '../../src/screens/welcome/welcome-first/welcome-first.selector';
import { WelcomeSecondSelector } from '../../src/screens/welcome/welcome-second/welcome-second.selector';
import {LoginStepFormSelector} from "../../src/screens/login/login-step/login-step-form/login-step-form.selector";
import {TestsSelector} from "../tests.selector";
import {GlobalValuesSelector} from "../global-values.selector";
import {InputPhoneSelector} from "../../src/components/input/input-phone/input-phone.selector";
import {UserCardSelector} from "../../src/screens/main/user-main/user-card/user-card.selector";

jest.setTimeout(300000);

describe('Login User screens', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('Successful User Login', async () => {

    await waitFor(element(by.id(WelcomeFirstSelector.Next))).toBeVisible();
    await element(by.id(WelcomeFirstSelector.Next)).tap();
    await waitFor(element(by.id(WelcomeSecondSelector.Login))).toBeVisible();
    await element(by.id(WelcomeSecondSelector.Login)).tap();
    await waitFor(element(by.id(InputPhoneSelector.CountrySelector))).toBeVisible();
    await element(by.id(InputPhoneSelector.CountrySelector)).tap();
    await waitFor(element(by.id(TestsSelector.CountryFilterInput))).toBeVisible();
    await element(by.id(TestsSelector.CountryFilterInput)).replaceText('Ukraine');
    await waitFor(element(by.id(TestsSelector.UkrainianFlag))).toBeVisible();
    await element(by.id(TestsSelector.UkrainianFlag)).tap();
    await waitFor(element(by.id(InputPhoneSelector.PhoneInput))).toBeVisible();
    await element(by.id(InputPhoneSelector.PhoneInput)).typeText(GlobalValuesSelector.PhoneNumber);
    await waitFor(element(by.id(LoginStepFormSelector.NextButton))).toBeVisible();
    await element(by.id(LoginStepFormSelector.NextButton)).tap();

    await waitFor(element(by.id(TestsSelector.OtpFieldFirstFrame))).toBeVisible();
    await element(by.id(TestsSelector.OtpField)).tap();
    await element(by.id(TestsSelector.OtpFieldFirstFrame)).atIndex(1).typeText(GlobalValuesSelector.Otp);

    await waitFor(element(by.text(GlobalValuesSelector.FirstTextOnPinScreen))).toBeVisible();
    await waitFor(element(by.text('1'))).toBeVisible().withTimeout(4000);
    await element(by.text('1')).tap();
    await element(by.label('2')).tap();
    await element(by.label('3')).tap();
    await element(by.label('4')).tap();

    await waitFor(element(by.text('1'))).toBeVisible().withTimeout(2000);
    await element(by.text('1')).tap();
    await element(by.label('2')).tap();
    await element(by.label('3')).tap();
    await element(by.label('4')).tap();

    await waitFor(element(by.id(UserCardSelector.Graphic))).toBeVisible();
  });
})

