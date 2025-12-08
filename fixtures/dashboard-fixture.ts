import{test as baseTest} from "@playwright/test";
import { Dashboard } from "../pages/Dashboard";

type MyFixture={
    dashboard:Dashboard;
}

export const test=baseTest.extend<MyFixture>({
    dashboard:async({page},use)=>{
       await use(new Dashboard(page));
    }
})