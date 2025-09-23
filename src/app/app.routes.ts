import { Routes } from '@angular/router';
import { Home } from './home/home';
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
                path:'**', 
                loadComponent:()=>import('./shared/not-found/not-found').then(m=>m.NotFound)
        },
        
];
        