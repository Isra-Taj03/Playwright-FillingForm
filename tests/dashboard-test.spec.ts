import {test} from "../fixtures/dashboard-fixture.ts"
import {expect} from "@playwright/test";

test("Testing Dashboard",async({page, dashboard})=>{
    await dashboard.gotoApp();
    // await dashboard.takeATour();
    // await expect(dashboard.Next).toBeVisible();
    // await dashboard.NextBtn();
    // await dashboard.BackBtn();
    // await expect(dashboard.tourStepNumber).toHaveText("1");
    await dashboard.clickPlanType();
    await dashboard.selectPlanType("Plan managed");
    await dashboard.firstNameField("Isra");
    await dashboard.lastNameField("Taj");
    await dashboard.planNum("03422334");
    const phoneValue=await dashboard.planNumber.inputValue();
    expect(phoneValue.length).toBeLessThanOrEqual(10)
    await dashboard.emailfiled("isra@test1.com");
    await dashboard.Phone("12234");
    await dashboard.addressfield("kkk");
    await dashboard.statefield("Anindilyakwa, NT, 0822");
    await expect(dashboard.stateDropdown).toBeVisible();
    await dashboard.passwordfield("klkl");
    await dashboard.eyeIconClick();
    await expect(dashboard.password).toHaveAttribute('type', 'text');
    await dashboard.eyeIconClick();
    await expect(dashboard.password).toHaveAttribute('type', 'password');
    
    await dashboard.cuntinueBtn();
    //await expect(page).toHaveURL("");
    //await expect(page).toHaveTitle("");
    //
});

// test("Empty field error",async({page,dashboard})=>{
//    await expect(dashboard.error).toBeVisible();
//    await expect(dashboard.error).toHaveText("please enter");
// }
//)


