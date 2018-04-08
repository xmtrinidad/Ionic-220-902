import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Objective } from '../../models/objective';
import { DomainService } from '../../services/domain.service';
import { Bullet } from '../../models/bullet';
import { ResourcesPage } from '../resources/resources';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource';


@Component({
  selector: 'page-objective-detail',
  templateUrl: 'objective-detail.html',
})
export class ObjectiveDetailPage implements OnInit {
  domainTitle: string;
  objective: Objective;
  color: string;
  bullets: Bullet;

  constructor(
    private modalCtrl: ModalController,
    private domainService: DomainService,
    private resourceService: ResourceService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.getObjectiveInfo();
  }

  getObjectiveInfo() {
    this.objective = this.navParams.data.objective;
    this.color = this.navParams.data.color;
    this.bullets = this.domainService.getBullets(this.objective.sectionNumber);
    this.domainTitle = this.navParams.data.domainTitle;
  }

  onHomeClick() {
    this.navCtrl.popToRoot();
  }

  onResourcesClick() {
    const objective = this.objective.sectionNumber.toString();
    const resources: Resource[] = this.resourceService.getResources(objective);
    const modal = this.modalCtrl.create(ResourcesPage, {resources: resources, objective: objective});
    modal.present();
  }

  getColor() {
    return this.domainService.getDomainColor();
  }
}
