import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ItemComponent } from './Components/item/item.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SecurityComponent } from './Components/security/security.component';
import { WalletComponent } from './Components/wallet/wallet.component';
import { LogComponent } from './Components/log/log.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item', component: ItemComponent },
    { path: 'cart', component: CartComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'security', component: SecurityComponent },
    { path: 'login', component: LogComponent },
];
