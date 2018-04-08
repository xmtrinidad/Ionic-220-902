import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Resource } from '../../models/resource';
import { DomainService } from '../../services/domain.service';
import { Objective } from '../../models/objective';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  resources: Resource[];
  objective: Objective;

  constructor(
    private domainService: DomainService,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.resources = this.navParams.get('resources');
    this.objective = this.navParams.get('objective');
  }

  onModalClose() {
    this.viewCtrl.dismiss()
  }

  getColor() {
    return this.domainService.getDomainColor();
  }

}
