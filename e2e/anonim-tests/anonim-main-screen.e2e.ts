import { device } from 'detox';

import { WelcomeFirstSelector } from '../../src/screens/welcome/welcome-first/welcome-first.selector';
import { WelcomeSecondSelector } from '../../src/screens/welcome/welcome-second/welcome-second.selector';
import { AnonymousHeaderCardSelector } from '../../src/screens/main/anonymous-main/anonymous-header/anonymous-header-card/anonymous-header-card.selector';
import { AnonymousMainSelector } from "../../src/screens/main/anonymous-main-old/anonymous-main.selector";

jest.setTimeout(30000);

describe('Login anonim screens', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('User-card is decreased after swiping-up', async () => {

    await waitFor(element(by.id(WelcomeFirstSelector.Next))).toBeVisible();
    await element(by.id(WelcomeFirstSelector.Next)).tap();
    await waitFor(element(by.id(WelcomeSecondSelector.Login))).toBeVisible();
    await element(by.id(WelcomeSecondSelector.GetStarted)).tap();
    await waitFor(element(by.id(AnonymousHeaderCardSelector.CardAmount))).toBeVisible();
    await element(by.id(AnonymousMainSelector.PopularStocksBlock)).swipe('up');
    await waitFor(element(by.id(AnonymousHeaderCardSelector.CardAmount))).toBeNotVisible();
  });
});
