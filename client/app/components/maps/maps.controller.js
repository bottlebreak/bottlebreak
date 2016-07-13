import Location from '../../common/location/location';

class MapsController {
  constructor(Location) {
    this.name = 'maps';
    this.locationService = Location;
    this.addMarker = () => {
      navigator.geolocation.getCurrentPosition(position => {
        this.locationService.addLocation(position);
      })
    }
  }
}
MapsController.$inject = ['Location'];
export default MapsController;

