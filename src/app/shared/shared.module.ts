import { NgModule } from '@angular/core';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';
import { FormsModule } from '@angular/forms';
import { NumberPipe } from './number.pipe';

const components = [
    OneComponent,
    TwoComponent,
    NumberPipe
]
@NgModule({
    imports: [
        FormsModule
    ],
    declarations: components,
    exports: components,
})
export class SharedModule {}