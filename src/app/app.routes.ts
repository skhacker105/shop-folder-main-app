import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            exposedModule: './routes'
        }).then(m => m.routes)
    },
    {
        path: 'home',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4400/remoteEntry.js',
            exposedModule: './routes'
        }).then(m => m.routes)
    }
];
