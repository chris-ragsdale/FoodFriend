"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const profile_service_1 = require("./links/profile/profile.service");
const router_1 = require("@angular/router");
let AppComponent = class AppComponent {
    constructor(router, profileService) {
        this.router = router;
        this.profileService = profileService;
        this.username = "Erik Gabrielsen";
    }
    ;
    ngOnInit() {
        // var user = JSON.parse(localStorage.getItem('currentUser'));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './app/app.html',
        styleUrls: ['./app/app.css'],
        providers: [profile_service_1.ProfileService]
    }),
    __metadata("design:paramtypes", [router_1.Router, profile_service_1.ProfileService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map