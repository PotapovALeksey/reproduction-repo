import { device } from 'detox';

import { WelcomeFirstSelector } from '../../src/screens/welcome/welcome-first/welcome-first.selector';
import { WelcomeSecondSelector } from '../../src/screens/welcome/welcome-second/welcome-second.selector';
import {LoginStepFormSelector} from "../../src/screens/login/login-step/login-step-form/login-step-form.selector";
import {TestsSelector} from "../tests.selector";
import {GlobalValuesSelector} from "../global-values.selector";
import {InputPhoneSelector} from "../../src/components/input/input-phone/input-phone.selector";
import {PopularStockPrimaryWraperSelector} from "../../src/components/popular-stocks/popular-stocks-primary/popular-stock-primary/popular-stock-primary-wrapper/popular-stock-primary-wraper.selector";
import {StockFooterSelector} from "../../src/screens/stock/stock-footer/stock-footer.selector";
import {OrderSubHeaderSelector} from "../../src/screens/order/order-sub-header/order-sub-header.selector";
import {
    OrderItemTypeSelector
} from "../../src/components/modal/modals/order-type-modal/order-item-type/order-item-type.selector";
import {InputSearchSelector} from "../../src/components/input/input-search/input-search.selector";
import {OrderConfirmSelector} from "../../src/screens/order/order-confirm/order-confirm.selector";
import {OrderSuccessSelector} from "../../src/screens/order/order-success/order-success.selector";
import {OrderFinishSelector} from "../../src/screens/order/order-finish/order-finish.selector";
import {InputSelector} from "../../src/components/input-block/input/input.selector";
import {OrderButtonSubmitSelector} from "../../src/screens/order/order-button-submit/order-button-submit.selector";

jest.setTimeout(300000);

describe('Limit order steps', () => {
    beforeAll(async () => {
        await device.launchApp();
        await device.reloadReactNative();
    });

    it('limit order flow', async () => {

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

        await waitFor(element(by.id(PopularStockPrimaryWraperSelector.StockInList)).atIndex(0)).toBeVisible().withTimeout(1000);
        await element(by.id(PopularStockPrimaryWraperSelector.StockInList)).atIndex(0).tap();

        await waitFor(element(by.id(StockFooterSelector.BuyButton))).toBeVisible().withTimeout(1000);
        await element(by.id(StockFooterSelector.BuyButton)).tap();

        await waitFor(element(by.id(OrderSubHeaderSelector.OrderSelector))).toBeVisible().withTimeout(1000);
        await element(by.id(OrderSubHeaderSelector.OrderSelector)).tap();

        await waitFor(element(by.id(OrderItemTypeSelector.OrderType)).atIndex(1)).toBeVisible().withTimeout(1000);
        await element(by.id(OrderItemTypeSelector.OrderType)).atIndex(1).tap();

        await waitFor(element(by.id(InputSearchSelector.CommonInput)).atIndex(0)).toBeVisible().withTimeout(1000);
        await element(by.id(InputSearchSelector.CommonInput)).atIndex(0).tap();
        await element(by.id(InputSearchSelector.CommonInput)).atIndex(0).typeText("1");

        await waitFor(element(by.id(OrderButtonSubmitSelector.CommonNextButton))).toBeVisible().withTimeout(1000);
        await element(by.id(OrderButtonSubmitSelector.CommonNextButton)).tap();

        await waitFor(element(by.id(InputSelector.CommonInput)).atIndex(0)).toBeVisible().withTimeout(1000);
        await element(by.id(InputSelector.CommonInput)).atIndex(0).tap();
        await element(by.id(InputSelector.CommonInput)).atIndex(0).typeText("1");

        await waitFor(element(by.id(OrderButtonSubmitSelector.CommonNextButton))).toBeVisible().withTimeout(1000);
        await element(by.id(OrderButtonSubmitSelector.CommonNextButton)).tap();

        await waitFor(element(by.id(OrderFinishSelector.ConfirmInfo))).toBeVisible().withTimeout(1000);
        await element(by.id(OrderFinishSelector.ConfirmInfo)).swipe('up');
        await waitFor(element(by.id(OrderConfirmSelector.ConfirmSlider))).toBeVisible().withTimeout(1000);
        await element(by.id(OrderConfirmSelector.ConfirmSlider)).swipe('right', 'slow', 1.00, 0.01);

        await waitFor(element(by.id(OrderSuccessSelector.SuccessButton))).toBeVisible().withTimeout(1000);
        await element(by.id(OrderSuccessSelector.SuccessButton)).tap();
    });

});
