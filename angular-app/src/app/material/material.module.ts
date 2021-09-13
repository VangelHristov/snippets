import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

const materialModules = [MatButtonModule, MatSnackBarModule];

NgModule({
  imports: materialModules,
  exports: materialModules,
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2500,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
    },
  ],
});
class MaterialModule {}
