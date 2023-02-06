import { expect } from 'detox';

import { WelcomeFirstSelector } from '../../src/screens/welcome/welcome-first/welcome-first.selector';
import { WelcomeSecondSelector } from '../../src/screens/welcome/welcome-second/welcome-second.selector';

jest.setTimeout(30000);

describe('Welcome screens', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('FirstWelcomScreen should have next button', async () => {
    await waitFor(element(by.id(WelcomeFirstSelector.Next))).toBeVisible();
    await element(by.id(WelcomeFirstSelector.Next)).tap();
    await waitFor(element(by.id(WelcomeSecondSelector.GetStarted))).toBeVisible();
    await expect(element(by.id(WelcomeSecondSelector.Login))).toBeVisible();
  });

  it('Sending application to background from firstWelcomScreen ', async () => {
    await waitFor(element(by.id(WelcomeSecondSelector.GetStarted))).toBeVisible();
    await device.sendToHome();
    await waitFor(element(by.id(WelcomeSecondSelector.GetStarted))).toBeNotVisible();
    await device.launchApp({ newInstance: false });
    await waitFor(element(by.id(WelcomeSecondSelector.GetStarted))).toBeVisible();
    await expect(element(by.id(WelcomeSecondSelector.Login))).toBeVisible();
  });

  it('Sending application to background from secondWelcomScreen ', async () => {
    await waitFor(element(by.id(WelcomeSecondSelector.GetStarted))).toBeVisible();
    await waitFor(element(by.id(WelcomeSecondSelector.Login))).toBeVisible();
    await device.sendToHome();
    await waitFor(element(by.id(WelcomeSecondSelector.GetStarted))).toBeNotVisible();
    await waitFor(element(by.id(WelcomeSecondSelector.Login))).toBeNotVisible();
    await device.launchApp({ newInstance: false });
    await waitFor(element(by.id(WelcomeSecondSelector.GetStarted))).toBeVisible();
    await waitFor(element(by.id(WelcomeSecondSelector.Login))).toBeVisible();
  });

});
