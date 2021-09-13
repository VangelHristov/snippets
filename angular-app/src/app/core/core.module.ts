import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const coreModules = [CommonModule, ReactiveFormsModule];

NgModule({
  imports: [...coreModules],
  exports: [...coreModules],
});
class CoreModule {}
