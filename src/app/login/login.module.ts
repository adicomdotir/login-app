import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [AuthenticationComponent],
    providers: [AuthenticationService],
    declarations: [AuthenticationComponent]
})
export class LoginModule { }
