import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER, routerKey } from './reducers';
import { CustomRouterSerializer } from './router-serializer';

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
    StoreDevtoolsModule.instrument({
      maxAge: 15,
      name: 'TaskProjectDevTools',
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: routerKey,
      serializer: CustomRouterSerializer,
    }),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class RootStoreModule {}
