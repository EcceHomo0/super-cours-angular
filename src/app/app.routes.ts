import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthGuardService } from './services/auth-guard.service';
export const routes: Routes = [
        // Utilisation classique import en Haut et on indique le composant
        {
                path:'home',
                component: Home
        },
        //Lazy loading on utilise loadComponent pour faire directement l'import
        {
                path: 'about', 
                loadComponent:()=>import('./about/about').then(m=>m.About)
                        
        },
        {
                path:'text-interpolation', 
                loadComponent:()=>import('./lessons/text-interpolation/text-interpolation').then(m=>m.TextInterpolation)
        },
        {
                path:'property-binding', 
                loadComponent:()=>import('./lessons/property-binding/property-binding').then(m=>m.PropertyBinding)
        },
        {
                path:'event-binding', 
                loadComponent:()=>import('./lessons/event-binding/event-binding').then(m=>m.EventBinding)
        },
        {
                path:'ng-model', 
                loadComponent:()=>import('./lessons/ng-model/ng-model').then(m=>m.NgModel)
        },
        {
                path:'formulaire-ng-model', 
                loadComponent:()=>import('./exercices/formulaire-ng-model/formulaire-ng-model').then(m=>m.FormulaireNgModel)
        },
        {
                path:'ng-if', 
                loadComponent:()=>import('./exercices/ng-if/ng-if').then(m=>m.NgIf)
        },
        {
                path:'ng-style-et-class', 
                loadComponent:()=>import('./exercices/ng-style-et-class/ng-style-et-class').then(m=>m.NgStyleEtClass)
        },
        {
                path:'ng-for', 
                loadComponent:()=>import('./exercices/ng-for/ng-for').then(m=>m.NgForClass)
        },
        {
                path:'ng-for-enfant', 
                loadComponent:()=>import('./exercices/ngfor-enfant/ngfor-enfant').then(m=>m.NgforEnfant)
        },
        {
                path:'tp-directives', 
                loadComponent:()=>import('./exercices/tp-directives/tp-directives').then(m=>m.TpDirectives)
        },
        {
                path:'app-meteo-api', 
                loadComponent:()=>import('./lessons/meteo-api/meteo-api').then(m=>m.MeteoApi)
        },
        {
                path:'app-pokemon-api', 
                loadComponent:()=>import('./lessons/pokemon-api/pokemon-api').then(m=>m.PokemonApi)
        },
        {
                path:'app-parent', 
                loadComponent:()=>import('./lessons/parent/parent').then(m=>m.Parent)
        },
        {
                path:'app-task-list-firebase', 
                loadComponent:()=>import('./lessons/task-list-firebase/task-list-firebase').then(m=>m.TaskListFirebase)
        },
        {
                path:'app-input-parent', 
                loadComponent:()=>import('./exercices/input-parent/input-parent').then(m=>m.ListRendering)
        },
        {
                path:'app-register', 
                loadComponent:()=>import('./auth/register/register').then(m=>m.Register)
        },
        {
                path:'app-login', 
                loadComponent:()=>import('./auth/login/login').then(m=>m.Login)
        },
        {
                path:'app-dashboard',
                canActivate: [AuthGuardService],
                loadComponent:()=>import('./auth/dashboard/dashboard').then(m=>m.Dashboard)
                },
        {
                path:'**', 
                loadComponent:()=>import('./shared/not-found/not-found').then(m=>m.NotFound)
        },
        
];
        