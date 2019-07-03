import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SimpleJavaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SimpleJavaAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SimpleJavaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimpleJavaAppSharedModule {
  static forRoot() {
    return {
      ngModule: SimpleJavaAppSharedModule
    };
  }
}
