import { IMarker } from "./../shared/interface/marker.interface";
import { Component } from "@angular/core";
import { MouseEvent } from "@agm/core";

declare var google: any;

@Component({
  selector: "app-draw-zones",
  templateUrl: "./draw-zones.component.html",
  styleUrls: ["./draw-zones.component.scss"],
})
export class DrawZonesComponent {
  public polygonPaths: Array<any[]> = [];
  public markers: IMarker[] = [];
  public zoom: number = 6;
  public lat: number = 51.673858;
  public lng: number = 7.815982;
  public isActionOpen: boolean = false;
  public previousOpenZoneMenuAction;
  public polyoneData: { name: ""; color: "" } = new Object() as {
    name: "";
    color: "";
  };

  clickedMarker(index: number, zoneInfo) {
    if (index !== 0) {
      this.markers.splice(index, 1);
    } else if (this.markers.length > 1) {
      this.polygonPaths.push([...this.markers]);
      this.markers = [];
      zoneInfo.open();
    }
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    });
  }

  addZone(zoneInfo) {
    this.polygonPaths[
      this.polygonPaths.length - 1
    ][0].color = this.polyoneData.color;
    this.polygonPaths[
      this.polygonPaths.length - 1
    ][0].name = this.polyoneData.name;
    this.polyoneData = { name: "", color: "" };
    zoneInfo.close();
  }
  onMapReady(e) {}

  toggleZoneActionMenu(infowindow) {
    if (this.previousOpenZoneMenuAction) {
      this.previousOpenZoneMenuAction.close();
    }
    infowindow.open();
    this.previousOpenZoneMenuAction = infowindow;
  }
  removeZone(index) {
    this.polygonPaths.splice(index, 1);
    this.previousOpenZoneMenuAction = null;
  }
}
