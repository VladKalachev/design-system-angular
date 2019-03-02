import { Injectable, Directive, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DesignSystemAngularService {
    constructor() { }
}
DesignSystemAngularService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DesignSystemAngularService.ctorParameters = () => [];
/** @nocollapse */ DesignSystemAngularService.ngInjectableDef = defineInjectable({ factory: function DesignSystemAngularService_Factory() { return new DesignSystemAngularService(); }, token: DesignSystemAngularService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DesignSystemAngularComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DesignSystemAngularComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-design-system-angular',
                template: `
    <p>
      design-system-angular works!
    </p>
  `
            }] }
];
/** @nocollapse */
DesignSystemAngularComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RowDirective {
    constructor() { }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[row]'
            },] }
];
/** @nocollapse */
RowDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-form',
                template: "<p>\n  form works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DesignSystemAngularModule {
}
DesignSystemAngularModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DesignSystemAngularComponent, RowDirective, FormComponent],
                imports: [],
                exports: [DesignSystemAngularComponent, FormComponent, RowDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DesignSystemAngularService, DesignSystemAngularComponent, DesignSystemAngularModule, FormComponent as ɵb, RowDirective as ɵa };

//# sourceMappingURL=design-system-angular.js.map