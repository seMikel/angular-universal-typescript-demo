import { Component, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserService } from '../services/user.service';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;

    constructor(
        page: Page,
        userService: UserService
    ) {
        page.actionBarHidden = true;
        userService.getUserData().subscribe();
    }

    closeDrawer() {
        this.drawerComponent.sideDrawer.closeDrawer();
    }
}
