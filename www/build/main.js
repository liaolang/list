webpackJsonp([2],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingPage = (function () {
    function ShoppingPage(afDatabase, ofAuth, navCtrl, taskserviceprovider) {
        this.afDatabase = afDatabase;
        this.ofAuth = ofAuth;
        this.navCtrl = navCtrl;
        this.taskserviceprovider = taskserviceprovider;
        this.taskitem = {};
        this.task = "";
    }
    ShoppingPage.prototype.ionViewWillLoad = function () {
        //this.ofAuth.authState.subscribe(data=>console.log(data));
        this.groupListRef$ = this.afDatabase.list('task/');
    };
    ShoppingPage.prototype.addTask = function (task) {
        if (task.length > 0) {
            this.taskserviceprovider.add(task);
            this.taskitem.value = task;
            this.afDatabase.list('task/').push(this.taskitem);
        }
        this.task = "";
    };
    ShoppingPage.prototype.updateStatus = function (task) {
        this.afDatabase.list('delete/').push(task);
        this.afDatabase.list('task/').remove(task.$key);
        // this.taskserviceprovider.updateItemStatus(id);
    };
    ShoppingPage.prototype.deleteTask = function (id) {
    };
    ShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping',template:/*ion-inline-start:"/Users/lenny/Downloads/listapp/src/pages/shopping/shopping.html"*/'<ion-header>\n\n    <ion-navbar color="primary"> \n    <ion-buttons left>\n        <button ion-button icon-olny menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n    \n        \n    <ion-title text-center> Shopping list </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col col-9 ion-item>\n          <ion-input type="text" placeholder="Type anything you want" [(ngModel)]="task" (keyup.enter)="addTask(task)">\n          </ion-input>\n        </ion-col>\n        <ion-col col-3 ion-item text-right>\n          <button ion-button clear (click)="addTask(task)">\n             Add\n             <!-- <ion-icon name="add"></ion-icon> -->\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n  <ion-list margin-top padding>\n    <ng-container *ngFor="let item of groupListRef$ | async;">\n      <ion-item >\n        <button ion-button item-right checked="false"  (click)="updateStatus(item)">\n          <ion-icon name="ios-remove-circle-outline"></ion-icon></button>\n        <!-- </ion-checkbox> -->\n        <ion-label>{{item.value}}</ion-label>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lenny/Downloads/listapp/src/pages/shopping/shopping.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__["a" /* TaskServiceProvider */]])
    ], ShoppingPage);
    return ShoppingPage;
}());

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_taskmodel__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service_storage_service__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';



/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TaskServiceProvider = (function () {
    function TaskServiceProvider(storage) {
        this.storage = storage;
        this.tasks = [];
        this.now = new Date().getTime();
    }
    TaskServiceProvider.prototype.add = function (task) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__models_taskmodel__["a" /* Task */](task, 0);
        this.tasks.push(item);
    };
    TaskServiceProvider.prototype.getTasksWithStatus = function (status) {
        var FilteredTasks = [];
        var len = this.tasks.length;
        for (var i = 0; i < len; i++) {
            var item = this.tasks[i];
            if (item.status == status) {
                FilteredTasks.push(item);
            }
        }
        return FilteredTasks;
    };
    TaskServiceProvider.prototype.updateItemStatus = function (id) {
        this.tasks.forEach(function (item, index) {
            if (item.id == id) {
                if (item.status == 1) {
                    item.status = 0;
                }
                else {
                    item.status = 1;
                }
            }
        });
    };
    TaskServiceProvider.prototype.deleteItem = function (id) {
        var _this = this;
        this.tasks.forEach(function (item, index) {
            if (item.id == id) {
                _this.tasks.splice(index, 1);
            }
        });
    };
    TaskServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__storage_service_storage_service__["a" /* StorageServiceProvider */]])
    ], TaskServiceProvider);
    return TaskServiceProvider;
}());

//# sourceMappingURL=task-service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AchievePage = (function () {
    function AchievePage(afDatabase, navCtrl, taskserviceprovider) {
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.taskserviceprovider = taskserviceprovider;
    }
    AchievePage.prototype.ionViewWillLoad = function () {
        this.groupListRef$ = this.afDatabase.list('delete/');
    };
    AchievePage.prototype.updateStatus = function (task) {
        this.afDatabase.list('task/').push(task);
        this.afDatabase.list('delete/').remove(task.$key);
    };
    AchievePage.prototype.deleteItem = function (task) {
        console.log('task ID' + task.$key);
        this.afDatabase.list('delete/').remove(task.$key);
    };
    AchievePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-achieve',template:/*ion-inline-start:"/Users/lenny/Downloads/listapp/src/pages/achieve/achieve.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n\n      <ion-buttons left>\n          <button ion-button icon-olny menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          </ion-buttons>\n\n    <ion-title text-center>Achieve</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list>\n    <ion-grid padding>\n      <ng-container *ngFor="let item of groupListRef$ | async;">\n          <ion-row>\n            <ion-col col-8>\n              <ion-label margin-left>{{item.value}}</ion-label>\n            </ion-col>\n\n            <ion-col col-4 text-right>\n              <button ion-button clear item-right (click)="updateStatus(item)">\n                <ion-icon name="md-git-compare"></ion-icon>\n              </button>\n              <button ion-button clear item-right (click)="deleteItem(item)">\n                <ion-icon name="md-close"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n      </ng-container>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lenny/Downloads/listapp/src/pages/achieve/achieve.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__["a" /* TaskServiceProvider */]])
    ], AchievePage);
    return AchievePage;
}());

//# sourceMappingURL=achieve.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SignUp_SignUp__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.SignUp = function () {
        console.log('Test');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__SignUp_SignUp__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.user["email"], this.user['password'])
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/lenny/Downloads/listapp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-toolbar color="primary">\n\n        <!-- <ion-buttons left>\n            <button ion-button icon-olny menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons> -->\n    \n      <ion-title text-center>login</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating>Your Email</ion-label>\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n\n      <button ion-button (click)="login()">Login</button>\n      <button ion-button color="light" (click)="SignUp()">Sign Up</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/lenny/Downloads/listapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = (function () {
    function SignUpPage(ofAuth, navCtrl, navParams) {
        this.ofAuth = ofAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    SignUpPage.prototype.Signup = function (user) {
        try {
            var result = this.ofAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.log(result);
        }
        catch (e) {
            console.error(e);
        }
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signUp',template:/*ion-inline-start:"/Users/lenny/Downloads/listapp/src/pages/SignUp/SignUp.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Sign Up</ion-title>>\n\n        </ion-navbar>\n\n        </ion-header>\n\n        <ion-content padding>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Your Email</ion-label>\n\n          <ion-input type="text"[(ngModel)]="user.email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password"[(ngModel)]="user.password"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button (click)="Signup(user)">Login</button>\n\n    </ion-content>'/*ion-inline-end:"/Users/lenny/Downloads/listapp/src/pages/SignUp/SignUp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=SignUp.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/SignUp/SignUp.module": [
		435,
		1
	],
	"../pages/login/login.module": [
		434,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_shopping__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__achieve_achieve__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__achieve_achieve__["a" /* AchievePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__shopping_shopping__["a" /* ShoppingPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lenny/Downloads/listapp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-buttons start>\n        <button ion-button icon-olny menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n        \n  <ion-tab [root]="tab2Root" tabIcon="md-cart"></ion-tab>\n  <ion-tab [root]="tab1Root" tabIcon="md-done-all"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/lenny/Downloads/listapp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageServiceProvider = (function () {
    function StorageServiceProvider() {
        // console.log('Hello StorageServiceProvider Provider');
    }
    StorageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageServiceProvider);
    return StorageServiceProvider;
}());

//# sourceMappingURL=storage-service.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(300);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shopping_shopping__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_achieve_achieve__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_SignUp_SignUp__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_task_service_task_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_service_storage_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_myprovider_myprovider__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database_deprecated__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_firebase_config__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// Import AngularFire
//Firebase




// Firebase Configuration
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* Myapp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_achieve_achieve__["a" /* AchievePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_SignUp_SignUp__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* Myapp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/SignUp/SignUp.module#SignUpPageModule', name: 'SignUpPage', segment: 'SignUp', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* Myapp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_achieve_achieve__["a" /* AchievePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_SignUp_SignUp__["a" /* SignUpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_task_service_task_service__["a" /* TaskServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_service_storage_service__["a" /* StorageServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_myprovider_myprovider__["a" /* MyproviderProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(name, status, id) {
        if (id === void 0) { id = 0; }
        this.name = name;
        this.status = status;
        this.id = id;
        this.name = name;
        this.status = status;
        this.id = new Date().getTime();
        return this;
    }
    return Task;
}());

//# sourceMappingURL=taskmodel.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myapp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shopping_shopping__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_achieve_achieve__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Myapp = (function () {
    function Myapp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used For navigation
        this.pages = [
            { title: 'shopping list', icon: 'list', component: __WEBPACK_IMPORTED_MODULE_4__pages_shopping_shopping__["a" /* ShoppingPage */] },
            { title: 'Achieve', icon: 'md-happy', component: __WEBPACK_IMPORTED_MODULE_5__pages_achieve_achieve__["a" /* AchievePage */] },
            { title: 'Login', icon: 'md-log-in', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    Myapp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    Myapp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], Myapp.prototype, "nav", void 0);
    Myapp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lenny/Downloads/listapp/src/app/app.html"*/'<ion-menu [content]="content">\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon>&nbsp; \n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n  <!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n'/*ion-inline-end:"/Users/lenny/Downloads/listapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Myapp);
    return Myapp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyproviderProvider = (function () {
    function MyproviderProvider(http) {
        this.http = http;
        console.log('Hello MyproviderProvider Provider');
    }
    MyproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MyproviderProvider);
    return MyproviderProvider;
}());

//# sourceMappingURL=myprovider.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAb6UHv62FsFDHBp3zXvWESmlOU89gPgxc",
    authDomain: "shoppingfire-9145b.firebaseapp.com",
    databaseURL: "https://shoppingfire-9145b.firebaseio.com",
    projectId: "shoppingfire-9145b",
    storageBucket: "shoppingfire-9145b.appspot.com",
    messagingSenderId: "867680613373"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map