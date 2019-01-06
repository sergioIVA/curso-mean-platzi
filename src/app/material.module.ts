import {NgModule} from '@angular/core';
import {
    MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatInputModule, MatGridListModule,
    MatRadioModule, MatProgressSpinnerModule, MatMenuModule, MatSnackBarModule,MatTabsModule
} from '@angular/material';


const modules=[
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule
];


@NgModule({
    imports:modules,
    exports:modules
})

export class MaterialModule{

}