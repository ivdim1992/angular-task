import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCER } from "./reducers";

@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCER, {
      runtimeChecks: {
        strictActionImmutability: false,
        strictStateImmutability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
      },
    }),
    EffectsModule.forRoot([]),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class RootStoreModule {}
