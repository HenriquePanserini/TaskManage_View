import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
    },
    { path: "login", component: LoginComponent},
    { path: "tarefas", component: TarefasComponent}
];
