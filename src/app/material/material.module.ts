import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  exports: [MatDialogModule, MatButtonModule, MatIconModule]
})
export class MaterialModule {}
