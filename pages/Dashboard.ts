import {Locator, Page} from "@playwright/test";

export class Dashboard{
    readonly page:Page;
    readonly takeTourBtn:Locator;
    readonly tourStepNumber:Locator;
    readonly Next:Locator;
    readonly Back:Locator;
//readonly participant:Locator;
    readonly planType:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly planNumber:Locator;
    readonly email:Locator;
    readonly phone:Locator;
    readonly address:Locator;
    readonly state:Locator;
    readonly stateDropdown:Locator;
    readonly password:Locator;
    readonly eyeIcon:Locator;
    readonly cintinueBtn:Locator;
    readonly dropdownLocator:Locator;
    readonly error:Locator;

    constructor(page:Page){
       this.page=page;
       this.takeTourBtn=page.getByRole('button', { name: 'Take a tour' });
       this.Next=page.locator('button:has-text("Next")');
       this.Back=page.locator('button[title="Back"]');
       this.tourStepNumber = page.locator("//div[contains(@class, 'font-Poppins-Regular') and text()='1']");
       this.planType=page.getByRole('button', { name: 'Select plan type' });
       this.dropdownLocator=page.locator('xpath=//*[@id="dropdown-option-plan managed"]');
       this.firstName=page.getByRole('textbox', { name: 'First name' });
       this.lastName=page.getByRole('textbox', { name: 'Last name' });
       this.planNumber=page.getByRole('textbox', { name: 'Plan number' });
       this.email=page.getByRole('textbox', { name: 'Email' });
       this.phone=page.getByRole('textbox', { name: 'Plan number' });
       this.address=page.getByRole('textbox', { name: 'Address' });
       this.state=page.getByRole('searchbox', { name: 'Suburb, state, postcode' });
       this.stateDropdown=page.locator('.bg-select-custom');
       this.password=page.getByRole('textbox', { name: 'Password' });
       this.eyeIcon=page.locator('svg.input-field-eye');
       //this.eyeIcon=page.locator('path').nth(5)
       this.cintinueBtn=page.getByRole('button', { name: 'Create account' });
       //this.error=page.locator('text="please enter your first name"');
       //this.error=page.locator(':text("please enter your first name")');
       this.error=page.locator("p", { hasText: "please enter your first name" });

    }
    
 async gotoApp(){
    await this.page.goto("https://stage-dashboard.ndisync.com.au/free-register"); 
 }

 async takeATour(){
    await this.takeTourBtn.click();
 }


 async NextBtn(){
    await this.Next.click();
 }

 async BackBtn(){
  await this.Back.click();
 }

 async clickPlanType(){
    await this.planType.click();
 }

 async selectPlanType(optionText: string) {
    // Wait for dropdown options to be visible
    await this.dropdownLocator.first().waitFor({ state: 'visible' });

    // Get the count of options
    const count = await this.dropdownLocator.count();

    // Loop through and click the matching option
    for (let i = 0; i < count; i++) {
      const text = await this.dropdownLocator.nth(i).textContent();
      if (text?.trim().toLowerCase() === optionText.toLowerCase()) {
        await this.dropdownLocator.nth(i).click();
        break;
      }
    }
  }

async firstNameField(firstName:string){
   await this.firstName.fill(firstName);
  }

  async lastNameField(lastName:string){
   await this.lastName.fill(lastName);
  }
  
  async planNum(planNum:string){
   await this.planNumber.fill(planNum);
  }
  
  async emailfiled(email:string){
    await this.email.fill(email);
  }

   async addressfield(address:string){
    await this.address.fill(address);
  }

  async Phone(phone:string){
   await this.phone.fill(phone);
  }
  
  async statefield(state:string){
   await this.state.fill(state);
  }

  async passwordfield(pass:string){
   await this.password.fill(pass);
  }

  async eyeIconClick(){
    await this.eyeIcon.click();
  }

  async cuntinueBtn(){
   await this.cintinueBtn.click();
  }

}
//div[contains(@class, 'font-Poppins-Regular') and text()='1']
//getByRole('textbox', { name: 'First name' })
//getByRole('button', { name: 'Select plan type' })
//getByRole('searchbox', { name: 'Suburb, state, postcode' })
//fro pist code below navigtin //.bg-select-custom