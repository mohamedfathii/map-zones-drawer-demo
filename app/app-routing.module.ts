import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DrawZonesComponent } from "./draw-zones/draw-zones.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "draw-zone",
    pathMatch: "full"
  },
  {
    path: "draw-zone",
    component: DrawZonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
